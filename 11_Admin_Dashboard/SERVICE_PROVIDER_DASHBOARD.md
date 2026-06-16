# Service Provider Dashboard Specification - Sarkin Mota 2.0

This specification details the layout, data tables, and workflows for the Service Provider Dashboard console (SafiMota).

---

## 1. Dashboard Overview & Modules

### 1. Service Catalog Manager
*   **Purpose**: Manage service descriptions, packages, and pricing details.
*   **Functions**: List of services offered (e.g. ceramic coating, wheel alignment). Form inputs to edit title, pricing parameters, duration, and images.
*   **Workflows**: Update Service: Click "Edit Service" -> Modify pricing -> Click Save -> Service listing updates.

### 2. Appointment Booking Calendar
*   **Purpose**: Schedule client bookings and manage workshop capacity.
*   **Functions**: Interactive weekly calendar grid. Displays: 1) Active appointments blocks, 2) Details of booking (member name, vehicle model, type of service), 3) Dynamic capacity indicators.
*   **Workflows**: Reschedule booking: Drag appointment to different time slot -> System sends email notification to client.

### 3. Customer Service Records
*   **Purpose**: Record service history in the client's digital garage service book.
*   **Functions**: Data entries list showing customer history. Includes: Checklist form to write service reports, upload diagnostic files, and enter final invoices.
*   **Workflows**: Complete appointment: Select active booking -> Click "Generate Service Record" -> Input service description -> Upload check logs -> Save.

### 4. Review Manager
*   **Purpose**: Monitor customer rating comments and feedback.
*   **Functions**: List of reviews with ratings, text feedback, and reply boxes.
*   **Workflows**: Respond to Review: Click "Reply" -> Enter text response -> Click Send.

### 5. Revenue Tracker
*   **Purpose**: Track weekly service earnings and monitor payout cycles.
*   **Functions**: Earnings dashboard displaying booking revenue, commission cuts, and pending payouts.
*   **Workflows**: Export bank transaction records to CSV for tax reporting.

---

## 2. Recommended Actions & Business Mapping

### Recommendation 1: Launch Automated Service Record Logging
*   **Business Objective**: Build customer trust and lock in secondary resale value by establishing clean service records.
*   **Stakeholder Owner**: Mechanic / Detailer / Service Provider.
*   **Action Plan**: Build database trigger rules that automatically log completed bookings as official entries in the member's Digital Garage.

### Recommendation 2: Set Up SMS Booking Confirmations
*   **Business Objective**: Reduce missed bookings and optimize workshop capacity.
*   **Stakeholder Owner**: Service Provider / Lead Developer.
*   **Action Plan**: Integrate Twilio or a local SMS API to send automated reminder alerts 2 hours prior to scheduled bookings.
