# Dealer Dashboard Specification - Sarkin Mota 2.0

This specification details the layout, data tables, and workflows for the Dealer Dashboard console.

---

## 1. Dashboard Overview & Modules

### 1. Inventory & Listing Management
*   **Purpose**: Allows dealers to create, publish, edit, and archive vehicle listings.
*   **Functions**: Grid layout of uploaded cars. Includes "Add New Car" stage stepper, image uploader, specification inputs, status settings (Available, Reserved, Sold), and instant edit features.
*   **Workflows**: Listing creation: Fill out details -> Upload photos -> Trigger automated VIN check -> Save.

### 2. Lead Management
*   **Purpose**: Track and manage customer inquiry leads routed from vehicle pages.
*   **Functions**: Data table showing: Customer name, phone, email, vehicle of interest, loan details, lead status (New, Contacted, In Progress, Won, Lost), and assignment log.
*   **Workflows**: Lead follow-up: Click lead -> View details -> Click "Assign Agent" -> Set status flag to "Contacted" -> Input notes log.

### 3. Subscription Management
*   **Purpose**: Manage billing cycles and subscription tiers.
*   **Functions**: Displays current plan (Bronze, Gold, Platinum), next payment due date, Paystack invoice history, and upgrade selectors.
*   **Workflows**: Plan upgrade: Click Gold Plan -> Redirect to Paystack secure portal -> Validate card payment -> Set subscription status flag to Active.

### 4. Dealership Profile & Staff Management
*   **Purpose**: Configure brand details and manage sub-dealer agent accounts.
*   **Functions**: Forms to update dealer logo, company address, and team list.
*   **Workflows**: Agent creation: Click "Add Team Member" -> Input email and assign role -> System sends onboarding invite link.

### 5. Dealership Analytics
*   **Purpose**: Track traffic metrics and lead performance.
*   **Functions**: Dashboard charts displaying: Total views per listing, click-through rate on phone number buttons, and conversion rates.
*   **Workflows**: Filter views statistics by specific vehicle models to identify which cars drive the most interest.

---

## 2. Recommended Actions & Business Mapping

### Recommendation 1: Deploy Direct WhatsApp Lead Routing Feature
*   **Business Objective**: Fast-track lead responses and close deals quicker by enabling instant buyer-to-dealer mobile communication.
*   **Stakeholder Owner**: Dealership Manager / Lead Developer.
*   **Action Plan**: Add a secondary "Chat on WhatsApp" button to listing pages for Gold and Platinum tier dealers that opens a pre-filled chat with the dealer's number.

### Recommendation 2: Implement Bulk Inventory CSV Upload
*   **Business Objective**: Simplify onboarding for large franchise dealers, increasing listing count on the platform.
*   **Stakeholder Owner**: Dealership Manager / Backend Developer.
*   **Action Plan**: Create a CSV parser in the inventory manager that imports vehicle spec columns and registers them under the dealer ID.
