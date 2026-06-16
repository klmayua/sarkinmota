const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const targetDomain = 'https://www.sarkinmota.ng';

async function extractVehicles() {
    console.log("Downloading homepage HTML for deep vehicle scan...");
    const res = await axios.get(targetDomain, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });
    const html = res.data;
    const $ = cheerio.load(html);

    const vehicles = new Set();

    // 1. Scan HTML a tags
    $('a').each((_, el) => {
        const href = $(el).attr('href');
        if (href && href.includes('/vehicles/')) {
            vehicles.add(href.split('#')[0].trim());
        }
    });

    // 2. Scan script tags content (Next.js hydration data)
    $('script').each((_, el) => {
        const text = $(el).text();
        const matches = text.match(/\/vehicles\/[a-zA-Z0-9_\-]+/g);
        if (matches) {
            matches.forEach(m => vehicles.add(m));
        }
    });

    // 3. Scan all script source files linked
    const scripts = [];
    $('script[src]').each((_, el) => {
        const src = $(el).attr('src');
        if (src.includes('/_next/static/')) {
            scripts.push(new URL(src, targetDomain).href);
        }
    });

    for (const scriptUrl of scripts) {
        try {
            const scriptRes = await axios.get(scriptUrl, { timeout: 10000 });
            const jsCode = scriptRes.data;
            const matches = jsCode.match(/\/vehicles\/[a-zA-Z0-9_\-]+/g);
            if (matches) {
                matches.forEach(m => vehicles.add(m));
            }
        } catch (err) {
            console.error(`Error scanning ${scriptUrl}: ${err.message}`);
        }
    }

    console.log("\n--- DISCOVERED VEHICLE INVENTORY SLUGS ---");
    const sortedVehicles = Array.from(vehicles).sort();
    sortedVehicles.forEach(v => console.log(v));
    console.log("-----------------------------------------");

    fs.writeFileSync('C:\\Users\\hp\\Desktop\\KLM2026\\SarkinMota\\01_Crawl\\extracted_vehicles.txt', sortedVehicles.join('\n'), 'utf8');
}

extractVehicles().catch(console.error);
