# Member Dashboard Specification - Sarkin Mota 2.0

This specification details the layout, interfaces, and workflows for the Member Dashboard console (Car Owner Circle).

---

## 1. Dashboard Overview & Modules

### 1. Profile & Membership
*   **Purpose**: Manage user details, avatar, notification settings, and subscription status.
*   **Functions**: Form fields to edit contact parameters, view membership level (Registered, Premium, Elite, Collector), and process tier upgrades.
*   **Workflows**: Tier Upgrade: Select Elite tier -> Complete payment -> Unlocks exclusive VIP owner group privileges.

### 2. The Digital Garage
*   **Purpose**: Allows members to register their current cars to track service records, license reminders, and valuations.
*   **Functions**: Grid display of owner's vehicles. Renders: 1) Active car details, 2) Link to digital service book, 3) Reminder settings (License, Insurance, service intervals), 4) Current trade-in valuation estimations.
*   **Workflows**: Register vehicle: Input VIN -> System queries specification API -> Auto-populates car profile in garage list.

### 3. Saved Vehicles & Favorites
*   **Purpose**: Track marketplace listings of interest.
*   **Functions**: Catalog grid view displaying user's bookmarked car listings. Includes alerts for price changes.
*   **Workflows**: Click bookmark star icon on listing -> Adds vehicle slug to saved vehicles list.

### 4. Events & Bookings
*   **Purpose**: Manage booked expo tickets and SafiMota service appointments.
*   **Functions**: List of upcoming events with downloadable QR codes, and current SafiMota appointment details (provider name, date, calendar schedule).
*   **Workflows**: Cancel booking: Click "Cancel Appointment" -> System alerts provider and frees up calendar slot.

### 5. Challenges & Achievements
*   **Purpose**: Gamification engine displaying points and unlocked trophies.
*   **Functions**: Progress bars showing points until next level, daily quiz launchers (Guess the engine, trivia), and lists of unlocked badges (e.g. "Autofest attendee").
*   **Workflows**: Complete daily trivia -> Earn 100 points -> Unlocks "Quiz Master" badge.

---

## 2. Recommended Actions & Business Mapping

### Recommendation 1: Launch License and Insurance Expiry Alerts
*   **Business Objective**: Drive long-term engagement by sending push notifications for vehicle maintenance needs.
*   **Stakeholder Owner**: Vehicle Owner / Product Manager.
*   **Action Plan**: Create database cron workers that check due dates daily and trigger SMS/Email notifications 14 days before license expiry.

### Recommendation 2: Enable Direct Valuation Tracking for Garage Cars
*   **Business Objective**: Drive upgrade sales by showing owners when their vehicle's valuation is optimal for a trade-in.
*   **Stakeholder Owner**: Prospective Buyer / Seller / Valuation Expert.
*   **Action Plan**: Connect garage listings to market price tracking charts, displaying estimated trade-in options next to their car.
