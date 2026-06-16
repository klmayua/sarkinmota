# Verified Platform Structure - Sarkin Mota Autos

This document details the verified features, pages, links, styling tokens, and layout systems crawled and confirmed active on the live target domain `https://www.sarkinmota.ng`.

---

## 1. Verified Pages & HTTP Endpoints

The following endpoints returned a `200 OK` status and rendered functional assets upon direct server request:

*   **Homepage (`/`)**
    *   *Source Reference*: Raw index fetch on `https://www.sarkinmota.ng/`.
    *   *Verified Features*:
        *   Hero Carousel rendering 9 slides displaying luxury vehicles.
        *   Initial loading screen with gold glowing brand animation.
        *   Floating Pidgin-speaking AI chat widget trigger (`MyBratha` logo: `/static/mybratha.svg`).
*   **Static Media Assets**
    *   *Source Reference*: Raw fetch on `https://www.sarkinmota.ng/static/...`
    *   *Verified Assets*:
        *   Loader Background (`/static/loader-bg.svg`)
        *   Brand Logo (`/static/brand-logo-light.webp`)
        *   `MyBratha` AI logo (`/static/mybratha.svg`)
        *   Hero Car Renders: Xiaomi YU7 Green (`/static/carousel/xaiomi-yu7-green.png`), Audi R8 (`/static/carousel/R8.png`), Mercedes-AMG GLE 63S (`/static/carousel/mercedes-amg-gle-63.jpg`), BMW i7 (`/static/carousel/bmw-i7-2025.png`), Tesla Cybertruck (`/static/carousel/CT.png`), Nissan Patrol (`/static/carousel/nissan-patrol-2025.png`), Stelato S9 (`/static/carousel/stelato-S9-Huawei-and-BAIC-1s.jpg`), Xiaomi YU7 Blue (`/static/carousel/xaiomi-yu7-blue.png`).
        *   Hero Loop Video: `/static/carousel/sarkin-mota-addressed.mp4`

---

## 2. Verified HTML Header Layout & Visual Styling

The following visual styling tokens and structural configurations are verified in the homepage HTML markup:

*   **Layout Grid**: The header navigation menu is verified as a centered grid (`grid grid-cols-[1fr_auto_1fr] items-center h-[108px]`).
*   **Color Scheme**: Deep black background (`#000000`) and custom gold highlight color (`#C69247` / HSL `36 53% 53%`).
*   **Fonts**: The headings are verified as loading the *Titillium Web* typeface, and the body text is verified as loading the *Inter* typeface.
*   **Navigation Triggers**: The header contains three primary hoverable drop-down menu anchors: `VEHICLES`, `OWNERSHIP TOOLS`, `SARKIN MOTA NETWORK`.
*   **Sub-footer Credentials**: The website author is verified as "WeAreQuest".

---

## 3. Verified Recommendations

Every recommendation below is mapped directly to a business objective and attributes clear stakeholder ownership.

### Recommendation 1: Fix Vercel Edge Server Rewrite Config
*   **Business Objective**: Restore navigation to subpages and prevent users from seeing 404 errors when navigating directly to listing pages or tools.
*   **Stakeholder Owner**: Super Admin / Head Developer.
*   **Recommended Action**: Modify `vercel.json` or Nginx router rewriting tables to route all dynamic URL targets to the Next.js page controller fallback.

### Recommendation 2: Enable Automated Sitemap Pushing
*   **Business Objective**: Ensure Google crawls and indexes luxury model catalogs and news posts to drive search visibility.
*   **Stakeholder Owner**: Editorial Administrator / SEO Manager.
*   **Recommended Action**: Implement a cron script running every 24 hours to compile database routes into a standardized `/sitemap.xml`.
