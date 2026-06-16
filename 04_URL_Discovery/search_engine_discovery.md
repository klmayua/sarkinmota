# Search Engine Discovery Report - Sarkin Mota Autos

This report documents the search engine indexing footprint and organic visibility of Sarkin Mota Autos (`https://www.sarkinmota.ng`).

## 1. Search Engine Indexing Status

A series of search queries using advanced search operators were executed to analyze the indexed pages on major search engines.

### Operators Executed and Results:
- `site:sarkinmota.ng` - **0 results found**
- `site:sarkinmota.ng category` - **0 results found**
- `site:sarkinmota.ng vehicle` - **0 results found**
- `site:sarkinmota.ng dealer` - **0 results found**
- `site:sarkinmota.ng finance` - **0 results found**
- `site:sarkinmota.ng compare` - **0 results found**

### Rationale for Zero Indexing

The complete lack of organic index records indicates one of the following technical conditions:
1. **Robots Meta Tags**: The pages may contain `<meta name="robots" content="noindex, nofollow" />` in their header templates, which actively instructs Googlebot and Bingbot to ignore the site.
2. **Missing Sitemap & Indexing Submission**: The lack of a `sitemap.xml` file, combined with the lack of manual index submission via Google Search Console, has left search bots unaware of the site structure.
3. **Staging / Development Status**: The domain is configured as a client-side routing single-page application (SPA). Direct GET requests to sub-routes (e.g. `/news`, `/about`) return a `404 Not Found` server response. Crawlers that hit these pages directly assume they do not exist, blocking indexing.

---

## 2. Brand Presence & External Mentions

While the domain itself has no direct search index presence, the Sarkin Mota brand has substantial public visibility and media coverage.

### Key Brand Findings:
- **Proprietor**: Aliyu Mohammad (Alamin Sarkinmota), a prominent high-end car dealer based in Abuja.
- **Location**: Central Business District, Abuja, Nigeria.
- **Public & Political Profile**:
  - Alamin Sarkinmota secured the Nigeria Democratic Congress (NDC) ticket in May 2026 to run for the House of Representatives representing Yola North, Yola South, and Girei Federal Constituency in the 2027 general election.
  - In 2025, the Nigerian National Orientation Agency (NOA) warned Sarkin Mota Autos regarding a viral AI-generated advertisement ("Bratha Assistant" / "MyBratha" AI) that mocked Nigerian civil servants' ability to afford luxury vehicles.
  - In early 2026, the dealership initiated a ₦2 billion defamation lawsuit against a blogger who accused the business of selling salvage/damaged vehicles.

---

## 3. Recommended SEO Recovery Strategy

To resolve the indexing gap and capitalize on the owner's high public profile, the following changes must be implemented:
1. **Fix Server-Side Sub-Route Resolution**: Configure the server (Vercel, Nginx, or Netlify) to rewrite all sub-route requests to the index file so they return a `200 OK` status with hydrated server-side rendering (SSR), rather than a `404`.
2. **Deploy Robots.txt & Sitemap.xml**: Create a `robots.txt` pointing to a dynamically generated `sitemap.xml` listing all 38 discovered routes.
3. **Submit to Search Consoles**: Manually register `https://www.sarkinmota.ng` in Google Search Console and Bing Webmaster Tools and request immediate site verification and crawl indexing.
