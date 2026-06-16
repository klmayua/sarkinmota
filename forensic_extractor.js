const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

const targetDomain = 'https://www.sarkinmota.ng';

async function extractForensicRoutes() {
    console.log("Downloading homepage HTML...");
    const res = await axios.get(targetDomain, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });
    const html = res.data;
    const $ = cheerio.load(html);
    
    // Find all script files
    const scripts = [];
    $('script[src]').each((_, el) => {
        const src = $(el).attr('src');
        if (src.includes('/_next/static/')) {
            scripts.push(new URL(src, targetDomain).href);
        }
    });
    
    // Find all stylesheet files
    const stylesheets = [];
    $('link[rel="stylesheet"]').each((_, el) => {
        const href = $(el).attr('href');
        if (href.includes('/_next/static/')) {
            stylesheets.push(new URL(href, targetDomain).href);
        }
    });
    
    console.log(`Discovered ${scripts.length} script chunks and ${stylesheets.length} CSS sheets.`);
    
    const paths = new Set();
    const assets = new Set();
    
    // Scan script chunks
    for (const scriptUrl of scripts) {
        console.log(`Scanning JS chunk: ${path.basename(scriptUrl)}...`);
        try {
            const scriptRes = await axios.get(scriptUrl, { timeout: 10000 });
            const jsCode = scriptRes.data;
            
            // Regex to match anything starting with a slash, e.g. "/vehicles", "/cars/sport"
            // We search for single/double quoted strings containing alphanumeric paths starting with /
            const pathRegex = /["'](\/[a-zA-Z0-9_\-\/\{\}\[\]\:\?\&\=]+?)["']/g;
            let match;
            while ((match = pathRegex.exec(jsCode)) !== null) {
                const route = match[1];
                
                // Ignore Next.js internal paths or static assets
                if (
                    route.startsWith('/_next') ||
                    route.includes('react') ||
                    route === '/' ||
                    route.length <= 2
                ) {
                    continue;
                }
                
                // If it's an asset, put in assets, otherwise in paths
                const ext = path.extname(route.split('?')[0]).toLowerCase();
                const assetExts = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.css', '.js', '.ico', '.mp4', '.webp', '.ttf', '.woff', '.woff2', '.pdf', '.xml'];
                if (assetExts.includes(ext)) {
                    assets.add(route);
                } else {
                    paths.add(route);
                }
            }
        } catch (err) {
            console.error(`Error fetching JS chunk ${scriptUrl}: ${err.message}`);
        }
    }
    
    // Scan CSS files
    for (const cssUrl of stylesheets) {
        console.log(`Scanning CSS: ${path.basename(cssUrl)}...`);
        try {
            const cssRes = await axios.get(cssUrl, { timeout: 10000 });
            const cssCode = cssRes.data;
            
            // Regex to find url(...) references
            const urlRegex = /url\(["']?(.*?)["']?\)/g;
            let match;
            while ((match = urlRegex.exec(cssCode)) !== null) {
                const asset = match[1];
                if (asset.startsWith('/') && !asset.startsWith('//')) {
                    assets.add(asset);
                }
            }
        } catch (err) {
            console.error(`Error fetching CSS ${cssUrl}: ${err.message}`);
        }
    }
    
    console.log(`\nScan complete!`);
    console.log(`Found ${paths.size} unique paths and ${assets.size} unique assets.`);
    
    // Save to files
    const pathsArray = Array.from(paths).sort();
    const assetsArray = Array.from(assets).sort();
    
    fs.writeFileSync('C:\\Users\\hp\\Desktop\\KLM2026\\SarkinMota\\01_Crawl\\extracted_paths.txt', pathsArray.join('\n'), 'utf8');
    fs.writeFileSync('C:\\Users\\hp\\Desktop\\KLM2026\\SarkinMota\\01_Crawl\\extracted_assets.txt', assetsArray.join('\n'), 'utf8');
    
    console.log("Paths saved to: 01_Crawl/extracted_paths.txt");
    console.log("Assets saved to: 01_Crawl/extracted_assets.txt");
}

extractForensicRoutes().catch(console.error);
