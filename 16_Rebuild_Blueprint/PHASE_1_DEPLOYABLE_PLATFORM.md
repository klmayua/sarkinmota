# Phase 1: Deployable Platform Specification (Sarkin Mota 2.0)

This specification defines the objectives, features, SEO repairs, and database structures required for the Phase 1 launch of Sarkin Mota 2.0.

---

## 1. Core Objectives & Scope

The primary objective of Phase 1 is to deploy a **fully functional, SEO-repaired, database-driven version** of the existing Sarkin Mota platform. This release focuses on fixing the broken server-side subpage routing and implementing the catalog, vehicle comparisons, and lead management dashboards.

### Features Included:
1.  **Server Routing & SEO Repairs**:
    *   Deploy sitemap configurations (`/sitemap.xml`) and custom `robots.txt` blocking admin and api endpoints.
    *   Set up Nginx rewrite rules to resolve 404 errors on direct subpage hits.
2.  **Dynamic Showroom Catalog**:
    *   Connect the vehicle catalog page (`/vehicles`) to the database.
    *   Deploy the specifications detail page (`/vehicles/[slug]`) and inquiry form.
3.  **Basic Spec Comparison Engine**:
    *   Activate the side-by-side comparison page (`/tools/compare`) for up to 3 cars.
4.  **Admin & Dealer Dashboard Console**:
    *   Onboard the Admin Dashboard overview console, vehicle inventory manager, and CRM lead tracker.
5.  **Preservation Guard**:
    *   Ensure all current vehicle listings (from homepage slides), blog articles, and categorization tags are migrated without URL structural changes.

---

## 2. Core Technical Architecture (Phase 1)

*   **Stack**: Next.js 14, Prisma ORM, PostgreSQL database, and Vercel hosting.
*   **Database Tables Deployed**: `users`, `dealers`, `brands`, `models`, `vehicles`, `vehicle_images`, `categories`, `tags`, `articles`, `article_tags`, `leads`, `exchange_rates`, `audit_logs`.

---

## 3. Recommended Actions & Business Mapping

### Recommendation 1: Run Pre-launch Google Index Verify Checks
*   **Business Objective**: Ensure the site becomes crawlable on major search engines to drive organic leads.
*   **Stakeholder Owner**: SEO Manager / Super Admin.
*   **Action Plan**: Verify the search visibility setting in Google Search Console and confirm the sitemap index is processed.

### Recommendation 2: Set Up Automated CRM Lead Email Notifications
*   **Business Objective**: Ensure dealers respond to buyer requests quickly, preventing drop-offs.
*   **Stakeholder Owner**: Dealership Manager / Lead Developer.
*   **Action Plan**: Integrate SendGrid SMTP mailer configurations to auto-send email notifications to dealers when a new lead is logged.
