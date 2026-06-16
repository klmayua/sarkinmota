# Broken Platform Structure - Sarkin Mota Autos

This document specifies the broken layouts, server routing errors, missing configurations, and navigation issues discovered on `https://www.sarkinmota.ng`.

---

## 1. Mapped Broken Routing (404 Page Errors)

Every page other than the homepage (`/`) returns a `404 Not Found` response upon direct server request. This critical failure blocks all external backlinking, marketing campaigns, and search engine index crawls.

*   **Identified Broken Sub-routes**:
    *   *Catalogues*: `/vehicles`, `/cars/executive`, `/cars/sport`, `/cars/suvs`, `/cars/electric`, `/cars/daily`, `/bikes`, `/buses`, `/buses-vans`.
    *   *Ownership Tools*: `/tools/ai-match`, `/tools/calculator`, `/tools/compare`, `/tools/estimator`, `/tools/history`, `/tools/valuation`.
    *   *Network Services*: `/network/brokers`, `/network/customs`, `/network/experts`, `/network/concierge`, `/network/clubs`, `/network/technicians`, `/network/partner`.
    *   *Workflow Steppers*: `/sell`, `/swap`, `/sell-swap`, `/sell/dashboard`.
    *   *Content Portals*: `/news`, `/about`, `/contact`, `/careers`.
*   **Technical Diagnosis**: The server hosting the Next.js bundle lacks the URL rewrite configurations required for single-page applications. When a direct hit occurs (e.g., requesting `/news`), the server searches for a physical `/news/index.html` file, fails, and returns a 404 rather than delegating routing control to the React client router.

---

## 2. Missing Core SEO Infrastructure

*   **Robots.txt Access**:
    *   *Source Reference*: `https://www.sarkinmota.ng/robots.txt`
    *   *Status*: `404 Not Found`.
    *   *Problem*: Web crawlers cannot identify indexing restrictions.
*   **Sitemap XML Access**:
    *   *Source Reference*: `https://www.sarkinmota.ng/sitemap.xml`
    *   *Status*: `404 Not Found`.
    *   *Problem*: Crawlers have no XML checklist to index deep catalog links, rendering the site invisible on Google.

---

## 3. Recommended Actions & Business Mapping

### Recommendation 1: Fix Vercel / Nginx Routing Rules
*   **Business Objective**: Ensure that clients clicking deep links (e.g. from WhatsApp shares or Google Search) land on the intended listing rather than a 404 page, preventing lead loss.
*   **Stakeholder Owner**: Super Admin / Head Developer.
*   **Action Plan**: Deploy a `vercel.json` rewrite file to redirect all non-file requests to the root index fallback:
    ```json
    {
      "rewrites": [{ "source": "/(.*)", "destination": "/" }]
    }
    ```

### Recommendation 2: Deploy Robots.txt & Sitemap Generator
*   **Business Objective**: Enable organic Google ranking for terms like "Xiaomi YU7 Abuja" or "luxury car swap Abuja".
*   **Stakeholder Owner**: SEO Manager / Super Admin.
*   **Action Plan**: Create a standard `robots.txt` and dynamically compile all active inventory entries into `sitemap.xml`.
