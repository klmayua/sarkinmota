# Stitch User Flows Specification (Sarkin Mota 2.0)

This document specifies the navigation paths, page redirections, state transitions, and success logs for key user flows in the Sarkin Mota 2.0 Ecosystem.

---

## 1. Flow 1: Buyer Purchasing Showroom Vehicle

```
[Homepage /] 
     | (Clicks Vehicle Slide or CTA)
     v
[Vehicle Details /vehicles/xiaomi-yu7]
     | (Fills out Lead Form, enters phone)
     v
[Validation Check] ---> (Fail) ---> [Render Form Errors]
     | (Pass)
     v
[Submit Form POST /api/leads]
     | (Process Lead Ingestion)
     v
[Show Success Modal] ---> (Click OK) ---> [Redirect to Member Garage]
```

*   **Details**: If the user checks the "Request financing" box during submission, the system automatically redirects them to `/tools/calculator` with the vehicle price preloaded in parameters.

---

## 2. Flow 2: Owner Trade-in / Swap Request

```
[Sell-Swap Portal /sell-swap] 
     | (Clicks "Swap Upgrade" Option)
     v
[Wizard Step 1: Input Contact Info] -> [Next]
     | (Validate Name & Phone formats)
     v
[Wizard Step 2: Input Current Vehicle VIN] -> [Next]
     | (Validate VIN Length = 17, query stats API)
     v
[Wizard Step 3: Upload Photos] -> [Next]
     | (Validate Min 5 uploads, check format rules)
     v
[Wizard Step 4: Choose Upgrade Vehicle] -> [Submit]
     | (Verify target status is AVAILABLE)
     v
[Show Success screen with Reference ID]
```

*   **Redirections**: If target vehicle becomes unavailable during form completion, Step 4 displays an empty state warning with a link to search similar models.

---

## 3. Flow 3: SafiMota Service Appointment Booking

```
[SafiMota Care Portal /care/safi] 
     | (Selects Ceramic Coating package)
     v
[Appointment Booking /care/booking]
     | (Selects Date, Time, and Garage)
     v
[Payment Checkout Form]
     | (Fills out payment credentials)
     v
[Paystack Processing] ---> (Fail) ---> [Show Checkout Payment Error]
     | (Pass)
     v
[Create Booking POST /api/care/bookings]
     | (Unlocks Member dashboard confirmation card)
     v
[Redirect to Member Events/Bookings Panel]
```

---

## 4. Flow 4: Event Ticketing (Autofest 2026)

```
[Autofest Portal /events/autofest] 
     | (Clicks "Buy VIP Ticket")
     v
[Checkout Form] -> [Process Paystack Checkout]
     | (Authorize Transaction)
     v
[Create Ticket POST /api/events/tickets/purchase]
     | (Generates dynamic QR code ticket)
     v
[Email QR Code Ticket + Render PDF in Member Garage]
```

---

## 5. Recommended Actions & Business Mapping

### Recommendation 1: Deploy Form State Caching (Local Storage)
*   **Business Objective**: Prevent user frustration by saving form progress if they refresh the browser midway through multi-stage steppers.
*   **Stakeholder Owner**: Prospective Buyer / Seller / Frontend Developer.
*   **Action Plan**: Write local storage listeners that auto-save form state parameters during step transitions.

### Recommendation 2: Enable Automated Redirect to AI Match on Search Fail
*   **Business Objective**: Retain potential buyers on the platform by steering them to conversational search if the standard catalog search returns empty.
*   **Stakeholder Owner**: prospective Buyer / Product Manager.
*   **Action Plan**: Program the search grid template to auto-redirect users to `/tools/ai-match?search=query` when zero inventory items are matched.
