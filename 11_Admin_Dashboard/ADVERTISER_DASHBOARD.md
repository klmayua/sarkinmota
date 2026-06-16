# Advertiser Dashboard Specification - Sarkin Mota 2.0

This specification details the layout, data tables, and workflows for the Advertiser Dashboard console.

---

## 1. Dashboard Overview & Modules

### 1. Campaign Manager
*   **Purpose**: Create, schedule, and configure ad campaigns.
*   **Functions**: List of campaigns with status indicators (Active, Pending, Ended). Setup forms to define campaign name, target layer (e.g. Media page sidebar), budget limit, start date, and end date.
*   **Workflows**: Create Campaign: Click "New Campaign" -> Set budget -> Select duration -> Choose target layer -> Save as draft.

### 2. Creative Assets Vault
*   **Purpose**: Upload and manage display ad banners.
*   **Functions**: Media upload console with format guides. Drag & drop uploader for JPG, PNG, and WebP assets.
*   **Workflows**: Creative submission: Select campaign -> Upload banner image -> Enter target destination click-through link -> Click "Submit for Review".

### 3. Placement Manager
*   **Purpose**: Select where banner ads display on the platform.
*   **Functions**: Interactive visual mapping tool showing layout positions: Homepage Header, Catalog Sidebar, Article Bottom, Chat Widget footer placement.
*   **Workflows**: Change placement: Select campaign -> Toggle target check boxes -> Save changes.

### 4. Billing Console
*   **Purpose**: Manage billing details, payments, and invoices.
*   **Functions**: Wallet balance display, credit card form, and PDF invoice downloads.
*   **Workflows**: Wallet funding: Enter payment amount -> Click Pay -> complete checkout process -> Wallet balance updates.

### 5. Performance Analytics
*   **Purpose**: Track impressions, clicks, click-through rates (CTR), and CPC metrics.
*   **Functions**: Performance charts by creative asset or campaign. Filters: Last 24 Hours, Weekly, Monthly.
*   **Workflows**: Review performance reports to isolate underperforming creatives and optimize campaigns.

---

## 2. Recommended Actions & Business Mapping

### Recommendation 1: Deploy Automated Ad Impression Verification Logs
*   **Business Objective**: Ensure advertisers pay only for verified human impressions, building brand integrity and repeat business.
*   **Stakeholder Owner**: Advertiser / Super Admin.
*   **Action Plan**: Implement backend logger filters that skip bot traffic from incrementing impression metrics.

### Recommendation 2: Enable Direct Self-Service Checkout for Ad Space Booking
*   **Business Objective**: Generate automated ad revenue with minimal sales staff oversight.
*   **Stakeholder Owner**: Super Admin / Lead Developer.
*   **Action Plan**: Integrate automated payment checkouts into campaign configurations, allowing advertisers to pay and go live.
