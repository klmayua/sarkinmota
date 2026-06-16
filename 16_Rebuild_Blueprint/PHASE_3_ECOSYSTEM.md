# Phase 3: Ecosystem Integration Specification (Sarkin Mota 2.0)

This specification defines the objectives, features, third-party API connections, and database structures required for the Phase 3 launch of Sarkin Mota 2.0 (SafiMota & Automotive Services).

---

## 1. Core Objectives & Scope

Phase 3 introduces **commercial and logistical integrations** that complete the end-to-end car ownership lifecycle. This release integrates SafiMota detailing and maintenance bookings, financial marketplaces, and professional customs clearance logs.

### Features Included:
1.  **SafiMota Integrated Care Booking**:
    *   Directory of detailing shops, battery hubs, mechanics, and tow services on `/services`.
    *   Dynamic service booking calendars with Paystack pre-payments checkouts.
    *   Auto-populated digital service books in member garages.
    *   Scheduled maintenance push reminders.
2.  **Financial & Insurance Marketplace**:
    *   Compare bank loan offers and submit financing applications directly from listings.
    *   Get comprehensive insurance policy quotes from insurance partners.
3.  **Professional Import & Customs Services**:
    *   Customs duty estimator showing shipping and clearing costs.
    *   VIP Import Concierge portal for custom exotic vehicle requests.
    *   Broker agent management with rating scales.

---

## 2. Technical Architecture (Phase 3)

*   **Stack Extensions**: External API connectors (AXA Mansard/Leadway insurance premium calculators, CBN exchange rates parser, and Carfax history check).
*   **Database Tables Deployed**: `service_providers`, `bookings`, `service_records`, `reminders`, `financing_requests`, `insurance_requests`, `notifications`.

---

## 3. Recommended Actions & Business Mapping

### Recommendation 1: Partner with Abuja Tow and Emergency Services
*   **Business Objective**: Monopolize luxury roadside assistance bookings in Abuja, generating steady booking commissions.
*   **Stakeholder Owner**: Service Provider / Super Admin.
*   **Action Plan**: Partner with established local tow truck services to integrate their live GPS dispatch APIs into the towing request form.

### Recommendation 2: Enable Automated Valuation Adjustments based on Service History
*   **Business Objective**: Motivate members to log service history on SafiMota by showing how it preserves their car's trade-in value.
*   **Stakeholder Owner**: Vehicle Owner / Valuation Specialist.
*   **Action Plan**: Program the Valuation Tool to apply a $10\%$ premium adjustment to valuations for vehicles with complete service logs.
