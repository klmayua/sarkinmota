# Inferred Platform Structure - Sarkin Mota Autos

This document specifies the platform layers, operational workflows, and directories inferred from compiled JavaScript bundles, layout configurations, and hydration state payloads.

---

## 1. Mapped Inferred Routes & Modules

While the live server returns 404 errors for sub-routes, Next.js chunk compilation maps confirm the existence of these modules:

### 1. Inferred Seller & Broker Dashboards
*   **Path: `/sell/dashboard`**
    *   *Source Reference*: Chunk `6004aa028a4d12c4.js` containing the layout string: `{label:"Seller Dashboard",href:"/sell/dashboard",icon:R,description:"Manage your listings"}`.
    *   *Operation Inferred*: An authenticated back-end interface for private sellers and independent brokers to register, log in, post vehicles, edit details, and respond to incoming buyer leads.
*   **Path: `/sell` and `/swap`**
    *   *Source Reference*: JavaScript routing bundle.
    *   *Operation Inferred*: Dynamic entry forms designed to collect customer vehicle details for wholesale evaluation or catalog exchanges.

### 2. Inferred Ownership & Valuation Tools
*   **Path: `/tools/estimator` and `/tools/valuation`**
    *   *Source Reference*: Webpack asset mappings.
    *   *Operation Inferred*: Backend calculation modules designed to compute vehicle values and customs clearing import duties for Nigerian ports based on US dollar pricing and year of manufacture.
*   **Path: `/tools/history`**
    *   *Source Reference*: Webpack routes catalog.
    *   *Operation Inferred*: VIN check query interface designed to check import history, odometer readings, and salvage reports.

### 3. Inferred Network Directories
*   **Paths: `/network/brokers`, `/network/customs`, `/network/experts`, `/network/concierge`**
    *   *Source Reference*: Footer links and network JS chunks.
    *   *Operation Inferred*: Directory registries designed to connect buyers with third-party service providers, shipping clearing agents, pre-purchase inspectors, and VIP import brokers.

---

## 2. Recommended Actions & Business Mapping

### Recommendation 1: Implement PostgreSQL Relational Database Schema
*   **Business Objective**: Support user accounts, dealer profiles, vehicle specifications, and history reports required by the inferred dashboard.
*   **Stakeholder Owner**: Super Admin / Database Administrator.
*   **Action Plan**: Deploy the normalized 11-table schema specifying user authentication levels, dealers, listings, and leads tracking.

### Recommendation 2: Connect Customs and VIN APIs to Inferred Routes
*   **Business Objective**: Activate the customs duty estimator and VIN history check tools to establish platform trust and generate high-intent leads.
*   **Stakeholder Owner**: Product Manager / Backend Developer.
*   **Action Plan**: Secure API access with customs tariff feeds and car history services, and hook up the backend controllers.
