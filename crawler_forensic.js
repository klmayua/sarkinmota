const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

const START_URL = 'https://www.sarkinmota.ng/';
const TARGET_DOMAINS = ['www.sarkinmota.ng', 'sarkinmota.ng'];
const visited = new Set();
const queue = [START_URL];
const pageData = [];
const linkGraph = {};
const externalLinks = new Set();
const staticAssets = new Set();

console.log('Starting Forensic-Level Crawler for Sarkin Mota...');

function normalizeUrl(targetUrl, baseUrl) {
    try {
        const resolved = new URL(targetUrl, baseUrl);
        // Remove hash/fragment
        resolved.hash = '';
        
        // Lowercase hostname
        resolved.hostname = resolved.hostname.toLowerCase();
        
        // Normalize trailing slashes for directory-like paths
        if (resolved.pathname.length > 1 && resolved.pathname.endsWith('/')) {
            resolved.pathname = resolved.pathname.slice(0, -1);
        }
        
        return resolved.href;
    } catch (err) {
        return null;
    }
}

function isInternal(targetUrl) {
    try {
        const parsed = new URL(targetUrl);
        return TARGET_DOMAINS.includes(parsed.hostname.toLowerCase());
    } catch (err) {
        return false;
    }
}

function isAsset(targetUrl) {
    try {
        const parsed = new URL(targetUrl);
        const pathname = parsed.pathname.toLowerCase();
        const ext = path.extname(pathname);
        const assetExts = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.css', '.js', '.ico', '.mp4', '.webp', '.ttf', '.woff', '.woff2', '.pdf', '.xml'];
        return assetExts.includes(ext);
    } catch (err) {
        return false;
    }
}

async function runCrawl() {
    while (queue.length > 0) {
        const currentUrl = queue.shift();
        const normalized = normalizeUrl(currentUrl, START_URL);
        
        if (!normalized || visited.has(normalized)) continue;
        visited.add(normalized);
        
        console.log(`[CRAWLING] ${normalized} (Queue: ${queue.length})`);
        
        try {
            // Respectful request timeout
            const response = await axios.get(normalized, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
                },
                timeout: 15000,
                maxRedirects: 5
            });
            
            const finalUrl = response.request.res.responseUrl || normalized;
            const normalizedFinal = normalizeUrl(finalUrl, START_URL);
            
            const html = response.data;
            const $ = cheerio.load(html);
            
            // Extract Page Metadata
            const title = $('title').text().trim() || 'No Title';
            const metaDescription = $('meta[name="description"]').attr('content') || '';
            const metaKeywords = $('meta[name="keywords"]').attr('content') || '';
            const canonical = $('link[rel="canonical"]').attr('href') || '';
            
            // Heading Audit
            const h1s = [];
            $('h1').each((_, el) => h1s.push($(el).text().trim()));
            const h2Count = $('h2').length;
            const h3Count = $('h3').length;
            
            const pageInfo = {
                url: normalized,
                resolvedUrl: normalizedFinal,
                status: response.status,
                title,
                metaDescription,
                metaKeywords,
                canonical,
                h1: h1s.join(' | '),
                h2Count,
                h3Count,
                linksFound: 0,
                assetsFound: 0
            };
            
            // Parse Links
            const pageLinks = [];
            $('a').each((_, el) => {
                const href = $(el).attr('href');
                if (!href) return;
                
                const normLink = normalizeUrl(href, normalized);
                if (!normLink) return;
                
                if (isInternal(normLink)) {
                    if (isAsset(normLink)) {
                        staticAssets.add(normLink);
                    } else {
                        pageLinks.push(normLink);
                        if (!visited.has(normLink) && !queue.includes(normLink)) {
                            queue.push(normLink);
                        }
                    }
                } else {
                    externalLinks.add(normLink);
                }
            });
            
            pageInfo.linksFound = pageLinks.length;
            
            // Find images/videos
            const pageAssets = [];
            $('img, video, source').each((_, el) => {
                const src = $(el).attr('src') || $(el).attr('data-src');
                if (src) {
                    const normAsset = normalizeUrl(src, normalized);
                    if (normAsset) {
                        staticAssets.add(normAsset);
                        pageAssets.push(normAsset);
                    }
                }
            });
            
            pageInfo.assetsFound = pageAssets.length;
            
            pageData.push(pageInfo);
            linkGraph[normalized] = {
                links: pageLinks,
                assets: pageAssets
            };
            
        } catch (err) {
            console.error(`[ERROR] Failed to fetch: ${normalized} - ${err.message}`);
            pageData.push({
                url: normalized,
                resolvedUrl: '',
                status: err.response ? err.response.status : 'FETCH_ERROR',
                title: 'ERROR',
                metaDescription: '',
                metaKeywords: '',
                canonical: '',
                h1: '',
                h2Count: 0,
                h3Count: 0,
                linksFound: 0,
                assetsFound: 0
            });
        }
        
        // Rate-limiting delay to prevent trigger blocks
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log(`\nCrawl completed. Discovered ${pageData.length} total pages.`);
    
    // Save JSON link map
    const jsonOutput = {
        pages: pageData,
        graph: linkGraph,
        externalLinks: Array.from(externalLinks),
        staticAssets: Array.from(staticAssets)
    };
    
    const jsonPath = 'C:\\Users\\hp\\Desktop\\KLM2026\\SarkinMota\\01_Crawl\\forensic_site_map.json';
    fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
    fs.writeFileSync(jsonPath, JSON.stringify(jsonOutput, null, 2), 'utf8');
    console.log(`Saved JSON site map to: ${jsonPath}`);
    
    // Save detailed CSV
    const csvHeaders = 'URL,Resolved URL,Status,Title,Meta Description,H1,H2 Count,H3 Count,Links Found,Assets Found\n';
    const csvRows = pageData.map(p => {
        return [
            p.url,
            p.resolvedUrl,
            p.status,
            p.title,
            p.metaDescription,
            p.h1,
            p.h2Count,
            p.h3Count,
            p.linksFound,
            p.assetsFound
        ].map(val => {
            const str = String(val || '').replace(/"/g, '""');
            return `"${str}"`;
        }).join(',');
    }).join('\n');
    
    const csvPath = 'C:\\Users\\hp\\Desktop\\KLM2026\\SarkinMota\\01_Crawl\\full_site_inventory.csv';
    fs.writeFileSync(csvPath, csvHeaders + csvRows, 'utf8');
    console.log(`Saved CSV inventory to: ${csvPath}`);
    
    // Generate Markdown Audit Report
    generateAuditReport();
}

function generateAuditReport() {
    const brokenPages = pageData.filter(p => p.status !== 200);
    const redirectChains = pageData.filter(p => p.url !== p.resolvedUrl && p.resolvedUrl !== '');
    
    let md = `# Forensic Website Link Audit: SarkinMota.ng\n\n`;
    md += `**Crawl Date**: ${new Date().toISOString()}\n`;
    md += `**Total Pages Discovered**: ${pageData.length}\n`;
    md += `**Total External Outbound Links**: ${externalLinks.size}\n`;
    md += `**Total Static Resource Assets**: ${staticAssets.size}\n\n`;
    
    md += `## 1. Discovered Pages Inventory\n\n`;
    md += `| Page URL | Title | Status | H1 Headers |\n`;
    md += `| :--- | :--- | :---: | :--- |\n`;
    pageData.forEach(p => {
        md += `| [${path.basename(p.url) || '/'}](${p.url}) | ${p.title} | ${p.status} | ${p.h1} |\n`;
    });
    
    md += `\n## 2. Broken Links / Errors\n\n`;
    if (brokenPages.length === 0) {
        md += `✓ No broken pages or request failures encountered.\n`;
    } else {
        md += `| Broken URL | Status | Title |\n`;
        md += `| :--- | :---: | :--- |\n`;
        brokenPages.forEach(p => {
            md += `| [${p.url}](${p.url}) | ${p.status} | ${p.title} |\n`;
        });
    }
    
    md += `\n## 3. URL Redirects / Canonical Divergences\n\n`;
    if (redirectChains.length === 0) {
        md += `✓ No redirection divergences encountered.\n`;
    } else {
        md += `| Request URL | Resolved Final URL | Status |\n`;
        md += `| :--- | :--- | :---: |\n`;
        redirectChains.forEach(p => {
            md += `| [${p.url}](${p.url}) | [${p.resolvedUrl}](${p.resolvedUrl}) | ${p.status} |\n`;
        });
    }
    
    md += `\n## 4. Discovered Assets (Images, Videos, Media)\n\n`;
    md += `| Asset URL |\n`;
    md += `| :--- |\n`;
    Array.from(staticAssets).forEach(asset => {
        md += `| [${path.basename(asset)}](${asset}) |\n`;
    });
    
    const reportPath = 'C:\\Users\\hp\\Desktop\\KLM2026\\SarkinMota\\01_Crawl\\forensic_crawl_report.md';
    fs.writeFileSync(reportPath, md, 'utf8');
    console.log(`Saved Markdown Audit Report to: ${reportPath}`);
}

runCrawl().catch(console.error);
