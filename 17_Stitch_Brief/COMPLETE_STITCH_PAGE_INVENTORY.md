# Stitch Page Inventory Specification (Sarkin Mota 2.0)

This document specifies the complete page layouts, routing patterns, access levels, and wireframe structures required to implement the Sarkin Mota 2.0 front-end interface in Stitch.

---

## 1. Page Catalog by Layer

### Layer 01: Media Ecosystem
1.  **News Grid Portal**
    *   *Route*: `/news` | *Access*: Public | *Layout*: 3-column media feed.
2.  **Article Reader**
    *   *Route*: `/news/[article-slug]` | *Access*: Public | *Layout*: Left content column, right related feed sidebar.
3.  **Vehicle Review Catalog**
    *   *Route*: `/reviews` | *Access*: Public | *Layout*: Split specs list with video banner anchors.
4.  **Buying Guides Index**
    *   *Route*: `/guides/buying` | *Access*: Public | *Layout*: Categorized grid of guide cards.

### Layer 02: Marketplace Ecosystem
5.  **Showroom Catalog**
    *   *Route*: `/vehicles` | *Access*: Public | *Layout*: Left filter menu column, right inventory grid list.
6.  **Vehicle Specification Sheet**
    *   *Route*: `/vehicles/[slug]` | *Access*: Public | *Layout*: Half-width image gallery panel, half-width spec/lead box.
7.  **Dealer Map Directory**
    *   *Route*: `/dealers` | *Access*: Public | *Layout*: Half-screen interactive map, half-screen dealer listings list.
8.  **Service Provider Finder**
    *   *Route*: `/services` | *Access*: Public | *Layout*: Category tags selector header, service grids list.

### Layer 03: Community Ecosystem
9.  **Social Circle Feed**
    *   *Route*: `/circle` | *Access*: Public | *Layout*: Centered feed panel, right active subgroups list.
10. **Member Garage Card**
    *   *Route*: `/member/[username]` | *Access*: Public | *Layout*: Top header profile banner, bottom garage assets grid.
11. **Supercar Owner Clubs Portal**
    *   *Route*: `/clubs` | *Access*: Public | *Layout*: Grid list of verified club cards with "Apply to Join" CTAs.

### Layer 04: Events & Experiences
12. **Autofest 2026 Portal**
    *   *Route*: `/events/autofest` | *Access*: Public | *Layout*: Full-bleed video landing template with ticket checkout box.
13. **Events Calendar Index**
    *   *Route*: `/events` | *Access*: Public | *Layout*: Monthly list table showing upcoming show highlights.

### Layer 05: Gamification
14. **Trivia Challenge Center**
    *   *Route*: `/challenges` | *Access*: Protected (Member) | *Layout*: Centered active challenge box, right leaderboards.

### Layer 06: SafiMota Care
15. **SafiMota Detailing Portal**
    *   *Route*: `/care/safi` | *Access*: Public | *Layout*: Detailing package options grid, and direct booking form.
16. **Towing & Emergency Rescue**
    *   *Route*: `/care/towing` | *Access*: Public | *Layout*: One-click "Request Towing" mobile button with live map positioning.

### Layer 07: Financial Services
17. **Loan Marketplace Compare**
    *   *Route*: `/finance` | *Access*: Public | *Layout*: Side-by-side bank interest compare tables.
18. **Comprehensive Insurance Checkout**
    *   *Route*: `/finance/insurance` | *Access*: Public | *Layout*: Multi-stage premium calculation stepper.

### Layer 08: Professional Business Services
19. **Customs duty Calculator**
    *   *Route*: `/professional/customs` | *Access*: Public | *Layout*: Calculator form panel and calculated landing cost matrix.
20. **VIP Import Concierge**
    *   *Route*: `/professional/import` | *Access*: Public | *Layout*: Custom vehicle ordering stepper form.

---

## 2. Recommended Actions & Business Mapping

### Recommendation 1: Configure Dynamic Path Redirections on the Frontend
*   **Business Objective**: Ensure a smooth user experience by preventing broken links or missing route states when navigating nested catalogs.
*   **Stakeholder Owner**: Head Developer / Super Admin.
*   **Action Plan**: Build standard path configurations in the Next.js router that auto-resolve trailing slashes and normalize casing redirects.

### Recommendation 2: Enable Automated Schema.org Markups per Template
*   **Business Objective**: Drive organic search visibility by enabling rich snippet indicators on Google Search.
*   **Stakeholder Owner**: SEO Specialist / Content Editor.
*   **Action Plan**: Write script builders inside layout files to auto-render JSON-LD structured data tags (`Car`, `NewsArticle`, `Event`) dynamically.
