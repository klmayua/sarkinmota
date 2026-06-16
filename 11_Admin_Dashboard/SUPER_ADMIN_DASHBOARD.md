# Super Admin Dashboard Specification - Sarkin Mota 2.0

This specification details the layout, data tables, and workflows for the Super Admin Dashboard control console.

---

## 1. Dashboard Overview & Modules

### 1. Platform Analytics
*   **Purpose**: Monitor platform-wide traffic, engagement, active users, and system growth.
*   **Functions**: Renders Google Analytics 4 API graph integrations, displaying page views, active sessions count, and average read times.
*   **Workflows**: Filter traffic metrics by platform layer (e.g. Media views vs SafiMota care bookings).

### 2. Revenue Analytics
*   **Purpose**: Audit subscription billing, ticketing sales, and referral commissions.
*   **Functions**: Integrates Paystack billing charts. Displays MRR (Monthly Recurring Revenue) from dealers and total commission spreads.
*   **Workflows**: View details of a specific payment transaction and issue manual refunds.

### 3. User Management & Permissions
*   **Purpose**: Control user access credentials, profile verifications, and system role authorization.
*   **Functions**: List of registered users with editable Role selectors (`ADMIN`, `EDITOR`, `DEALER`, `SELLER`, `BUYER`). Includes dealer business document verification queue.
*   **Workflows**: Verify Dealer profile: Click "Review Documents" -> Inspect dealer trade license -> Set status flag to `VERIFIED`.

### 4. Community Moderation
*   **Purpose**: Oversee public forums, member posts, comments, and flag reports.
*   **Functions**: List of flagged posts and comments. Includes "Approve", "Delete", or "Warn User" action triggers.
*   **Workflows**: Review flagged comment -> Click "Delete Comment" -> System logs delete action and sends email notification to author.

### 5. Audits & Logs
*   **Purpose**: Log admin actions and security occurrences.
*   **Functions**: Searchable log table displaying: timestamp, operator user ID, target table, action type (e.g. `USER_ROLE_UPDATE`), old value, new value, and IP address.
*   **Workflows**: Audit search: Input username -> Filter changes to isolate specific system modifications.

### 6. System Settings & Integrations
*   **Purpose**: Configure global environmental settings, exchange rates, and API keys.
*   **Functions**: Form inputs to update CBN custom clearing exchange rate, OpenAI API key, and Carfax history token check credentials.
*   **Workflows**: Update USD/NGN customs clearing rate -> Click "Save Settings" -> Platform estimator calculators update values.

---

## 2. Recommended Actions & Business Mapping

### Recommendation 1: Deploy Platform Health Monitor Dashboard
*   **Business Objective**: Maintain high availability (uptime) to ensure no leads are lost and chat widgets remain responsive.
*   **Stakeholder Owner**: Super Admin / System DevOps Engineer.
*   **Action Plan**: Integrate a server health monitor API (like Datadog or Vercel Analytics) to track API request response times and serverless usage metrics.

### Recommendation 2: Enable Automated Fraud Flags for Audit Logs
*   **Business Objective**: Protect the marketplace from fraudulent dealer listings.
*   **Stakeholder Owner**: Super Admin / Platform Moderator.
*   **Action Plan**: Build database trigger rules that flag accounts modifying vehicle pricing or VIN numbers more than three times a day.
