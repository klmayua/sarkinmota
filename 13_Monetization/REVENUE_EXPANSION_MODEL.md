# Revenue Expansion Model Specification (Sarkin Mota 2.0)

This document specifies the monetization rules, pricing targets, and commercial operations for the expanded layers of the Sarkin Mota 2.0 Ecosystem (SafiMota care, Autofest ticketing, financial broker commissions, and media ads).

---

## 1. SafiMota Care Services Revenue

The vehicle care portal (`/care/booking`) acts as an appointment booking engine for trusted third-party garages.

### Monetization Channels
*   **Booking Commission Fee**: The platform retains $10\%$ of all invoice totals booked on SafiMota (detailing, emergency towing, battery replacement).
*   **SafiMota Verified Badge Subscription**: Charging service centers a flat fee of ₦20,000/month for a "Verified Care Provider" status badge to drive higher visibility.

---

## 2. Event Ticketing & Sponsorship (Autofest & Expos)

Sarkin Mota hosts the annual Autofest Abuja and specialized expos (such as the EV Expo and vintage showcase).

### Ticketing & Booking Options
*   **General Entry Ticket**: ₦5,000 per ticket.
*   **VIP Circle Pass**: ₦25,000 per ticket (includes paddock access and refreshments).
*   **Exhibitor Booth Rental**:
    *   *Independent Vendor*: ₦100,000 per booth.
    *   *Franchise Dealership Showroom*: ₦500,000 per premium space.
*   **Corporate Sponsorship Packages**:
    *   *Platinum Title Sponsor*: ₦5,000,000 per event.
    *   *Gold Partner*: ₦2,000,000 per event.

---

## 3. Financial & Insurance Marketplace Commissions

*   **Integrated Financing Referral Fee**: Platform charges partner banks $1.25\%$ of the total loan principal upon disbursement for leads originating from `/tools/calculator`.
*   **Comprehensive Insurance Commission**: Platform retains $7.5\%$ of the first-year policy premium from partner insurance providers (e.g. Leadway) for leads captured.

---

## 4. Recommended Actions & Business Mapping

### Recommendation 1: Launch Autofest Ticketing Checkout Portal
*   **Business Objective**: Generate high-volume ticket revenue and capture user contacts to build a remarketing database for vehicle sales.
*   **Stakeholder Owner**: Event Organizer / Super Admin.
*   **Action Plan**: Build the events ticketing page on the frontend and deploy QR code tickets generation to user garages upon checkout.

### Recommendation 2: Partner with Major Insurance Providers for API Integrations
*   **Business Objective**: Secure instant, binding insurance quotes for vehicle buyers, increasing conversion and insurance commission splits.
*   **Stakeholder Owner**: Product Manager / Financial Compliance Officer.
*   **Action Plan**: Partner with AXA Mansard or Leadway Insurance to integrate their premium calculator APIs directly into the vehicle details page checkout steps.
