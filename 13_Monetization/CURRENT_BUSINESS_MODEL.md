# Current Business Model - Sarkin Mota Autos

This document details the existing business model and direct monetization streams of the Sarkin Mota Autos platform.

---

## 1. Core Revenue Operations

### 1. Showroom Retail Markups (Direct Sales)
*   **Source Reference**: Raw catalog page data showing luxury vehicles in local inventory.
*   **Description**: High-margin vehicle sales out of the flagship showroom in the Central Business District, Abuja. Focuses on low-volume, high-scarcity luxury models (such as the Xiaomi YU7, Cybertruck, and Audi R8).
*   **Monetization Mechanism**: Direct spread between CIF (Cost, Insurance, Freight) + port clearing costs and showroom retail pricing. Margins range from 15% to 25% net profit per vehicle.

### 2. Vehicle Swap Valuations
*   **Source Reference**: Webpack route catalog mapping `/sell-swap` forms.
*   **Description**: Trade-in transactions where clients return their older vehicle plus cash in exchange for a newer showroom vehicle.
*   **Monetization Mechanism**: Platform extracts value from two directions:
    1.  Undervaluing the trade-in vehicle compared to its eventual retail potential (margin margin).
    2.  Retailing the trade-in car after detail cleaning and servicing.

### 3. VIP Importation Concierge
*   **Source Reference**: Inferred from network paths (`/network/concierge`).
*   **Description**: Custom ordering of exotic vehicles on behalf of high-net-worth individuals in Abuja.
*   **Monetization Mechanism**: A flat handling and logistics commission (5% to 8% of the total vehicle value) paid by the buyer, combined with shipping and clearing broker package markups.

---

## 2. Business Context & Stakeholder Relationships

*   **Proprietor Profile**: Aliyu Mohammad (Alamin Sarkinmota), NDC candidate for House of Representatives (2027 General Elections).
*   **Community Equity**: The platform's credibility is tied to the owner's high-profile presence in Abuja and Yola. News articles double as political press releases, building local trust and prestige.

---

## 3. Recommended Actions & Business Mapping

### Recommendation 1: Deploy Automated Trade-In Valuation Matrix
*   **Business Objective**: Standardize swap evaluations to increase volume and reduce manual estimation errors by sales staff.
*   **Stakeholder Owner**: Dealership Manager / Valuation Expert.
*   **Action Plan**: Connect the trade-in valuation tool to dynamic Nigerian auction price APIs to generate instant estimates for clients.

### Recommendation 2: Automate Clearing Invoices for Custom Orders
*   **Business Objective**: Increase VIP Importation sales conversion rate by providing immediate, transparent, itemized landing cost quotes.
*   **Stakeholder Owner**: Customs Specialist / Importation Concierge.
*   **Action Plan**: Integrate the Customs Duty Estimator with shipping API tables to generate instantly binding delivery quotes during ordering steps.
