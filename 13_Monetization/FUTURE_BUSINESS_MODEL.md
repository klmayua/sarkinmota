# Future Business Model Specification (Sarkin Mota 2.0)

This document specifies the next-generation SaaS membership, marketplace commission splits, and directory listing monetization models to be implemented in Sarkin Mota 2.0.

---

## 1. SaaS Dealer & Partner Memberships

Sarkin Mota 2.0 will transition from a single-dealer catalog to a multi-tenant marketplace model where external dealerships and brokers pay recurring subscriptions to access high-intent luxury buyers.

### Subscription Tier Structure
1.  **Dealer Bronze Tier (Basic)**:
    *   *Cost*: Free / Onboarding invitation.
    *   *Features*: Up to 2 active vehicle listings. Standard email lead forms.
2.  **Dealer Gold Tier (Professional)**:
    *   *Cost*: ₦50,000 / month (or ₦500,000 annually).
    *   *Features*: Up to 15 active vehicle listings. Direct customer WhatsApp triggers. Verification badge. Analytics dashboard access.
3.  **Dealer Platinum Tier (Enterprise)**:
    *   *Cost*: ₦150,000 / month (or ₦1,500,000 annually).
    *   *Features*: Unlimited vehicle listings. Highlighted carousel homepage positioning. Automatic inclusion in AI Match vector searches. Staff management (up to 5 agent accounts).

---

## 2. Directory Transaction Commission Splits

The platform will charge transaction fees on all services brokered through the network directory paths.

### Commission Split Rules
*   **Auto Brokers Listing Sales**: $1.5\%$ commission on the final vehicle transaction price for any sale closed using a lead captured on the platform.
*   **Verified Mechanics & Detailing (SafiMota)**: $10\%$ commission on all booking totals processed through the appointment booking engine (`/care/booking`).
*   **Customs Clearing & Port Agents**: Flat referral commission of ₦15,000 per customs clearing lead routed to partner clearing agents.

---

## 3. Recommended Actions & Business Mapping

### Recommendation 1: Deploy Paystack Subscription Billing Integration
*   **Business Objective**: Automate SaaS recurring payments from partner dealers to ensure consistent cash flow.
*   **Stakeholder Owner**: Super Admin / Lead Billing Developer.
*   **Action Plan**: Connect Paystack API subscription plans to the authenticated Dealer Dashboard registration portal.

### Recommendation 2: Implement Escrow Wallet Service for Broker Sales
*   **Business Objective**: Protect platform commission splits on broker-brokered sales and ensure high trust between buyers and third-party agents.
*   **Stakeholder Owner**: Dealership Manager / Financial Compliance Officer.
*   **Action Plan**: Develop a digital escrow booking mechanism where payments are validated and commission cuts are automatically routed before final payment release.
