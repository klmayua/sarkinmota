# Event Dashboard Specification - Sarkin Mota 2.0

This specification details the layout, interfaces, and workflows for the Event Dashboard console.

---

## 1. Dashboard Overview & Modules

### 1. Events & Registrations
*   **Purpose**: Create, schedule, and edit automotive events (Autofest, Expos, Track Days).
*   **Functions**: Grid listing of events with status flags (Draft, Upcoming, Active, Completed). Includes creation forms and participant lists.
*   **Workflows**: Create Event: Click "Create Event" -> Input title, schedule, description, ticket prices, location, and booth layouts -> Publish.

### 2. Sponsorship & Exhibitors Management
*   **Purpose**: Manage corporate sponsors and booth exhibitor bookings.
*   **Functions**: Data table showing: Exhibitor name, booth number allocation, package tier (Platinum, Gold, Silver), payment status, and asset uploads (logos, banners).
*   **Workflows**: Booth Allocation: Select approved exhibitor -> Click "Assign Booth" -> Select booth number -> Send confirmation email.

### 3. Ticketing & Check-In Console
*   **Purpose**: Manage ticket sales and perform gate check-ins.
*   **Functions**:
    *   List of sold tickets with status badges (Paid, Cancelled, Checked-in).
    *   Mobile-responsive gate camera reader interface for QR codes verification.
*   **Workflows**: Ticket Verification: Scan ticket QR code -> System matches hash -> Sets ticket status flag to "Checked-in" -> Unlocks green entrance check box screen.

### 4. Event Analytics
*   **Purpose**: Track ticket sales metrics, exhibitor revenues, and entrance logs.
*   **Functions**: Graphs showing ticket sales performance, and entrance logs by hour.
*   **Workflows**: Review sales reports to adjust ticket pricing or promotions before next expo events.

---

## 2. Recommended Actions & Business Mapping

### Recommendation 1: Launch Gate Check-in Mobile App UI
*   **Business Objective**: Fast-track gate lines and verify entries securely during Autofest events.
*   **Stakeholder Owner**: Event Organizer / Gate Staff.
*   **Action Plan**: Build a mobile-optimized PWA layout of the check-in camera scanner interface for staff.

### Recommendation 2: Integrate Automated Exhibitor Invoicing
*   **Business Objective**: Secure exhibition revenues and streamline paperwork.
*   **Stakeholder Owner**: Event Organizer / Billing Administrator.
*   **Action Plan**: Integrate Paystack checkout links into the exhibitor registration steps to automate booth fee payments.
