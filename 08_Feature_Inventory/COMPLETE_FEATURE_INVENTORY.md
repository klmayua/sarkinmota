# Complete Feature Inventory - Sarkin Mota Autos

This inventory maps and analyzes every user-facing and backend operational feature discovered on the Sarkin Mota Autos platform.

---

## 1. Search & Discovery Features

### Vehicle Search & Filtering
*   **Description**: Users can search the active vehicle inventory.
*   **Front-end Components**: Search bar in the header, filtering sidebar in `/vehicles`.
*   **Filtering Fields**: Make, Model, Year, Body Type, Price Range, Mileage Range, Fuel Type, Transmission.
*   **Sorting options**: Sort by price (ascending/descending), age (newest/oldest), mileage (lowest/highest).

### AI Car Match ("MyBratha" Assistant)
*   **Description**: Conversational search powered by a custom LLM assistant trained on local auto inventory and shipping details.
*   **Front-end Components**: Floating chat widget on all pages, full-screen portal at `/tools/ai-match`.
*   **Functional Input**: Text inputs from the buyer describing their budget, road conditions, status requirements, or size preferences.
*   **Functional Output**: Conversational guidance, combined with embedded vehicle link cards.

### Compare Cars Engine
*   **Description**: Compare the technical specifications of up to three selected vehicles side-by-side.
*   **Front-end Components**: Column-based matrix page (`/tools/compare`).
*   **Parameters**: Prices, Engine, Power (HP), Torque (Nm), Top Speed, 0-100 km/h acceleration, electric range (for EVs).

---

## 2. Interactive Ownership Tools

### Loan & Finance Calculator
*   **Description**: Computes estimated monthly repayments for car loans based on user sliders.
*   **Front-end Components**: Loan calculator widget (`/tools/calculator`).
*   **Calculations**: Calculates monthly payment, total interest payable, total finance cost. Offers a print/download option and a direct "Apply for Loan" contact submit.

### Customs & Importation Duty Estimator
*   **Description**: Helps buyers estimate the total cost of importing a vehicle to Nigeria, including shipping fees, custom clearing rates, and duties.
*   **Front-end Components**: Estimator form (`/tools/estimator`).
*   **Logic**: Uses vehicle value, manufacture year, engine size, and port of arrival (e.g. Lagos Apapa) to output estimated duty costs.

### Vehicle Valuation Tool
*   **Description**: Estimates a vehicle's current market value in Nigeria based on historical trade data.
*   **Front-end Components**: Inputs on `/tools/valuation` (VIN, make, model, mileage, body condition).
*   **Logic**: Outputs current valuation ranges (Low, Average, High).

### VIN History & Background Check
*   **Description**: Provides vehicle background check reports (salvage record check, accident check, odometer fraud check).
*   **Front-end Components**: VIN submission box at `/tools/history`.
*   **Logic**: Returns verification status (accident-free, salvage indicator, verified imports status). This directly addresses the brand's 2026 controversy regarding allegations of selling salvage vehicles.

---

## 3. Marketplace & Transaction Workflows

### Sell & Swap Leads Ingestion
*   **Description**: Interactive step-by-step wizard for users looking to sell their cars to the dealership or swap them.
*   **Front-end Components**: Forms on `/sell`, `/swap`, `/sell-swap`.
*   **Features**: Drag-and-drop image uploader, VIN lookup validation, and condition checklist checklist (Engine, Suspension, Gearbox, Body).

### Dealer Partner Portal
*   **Description**: Allows verified third-party dealers to post cars to the inventory.
*   **Front-end Components**: Login page, onboarding registration form.
*   **Dashboard Features**: Add listings, update statuses, check lead messages, view page visit analytics.

---

## 4. Network Directory Directory

### Professional Directories
*   **Description**: Searchable directories to connect buyers with auto service partners.
*   **Categories**:
    *   **Auto Brokers**: Sell or swap agents.
    *   **Customs Specialists**: Ports clearing agents.
    *   **Inspection Experts**: Independent pre-purchase vehicle inspectors.
    *   **Importation Concierge**: Import logistics advisors.
    *   **Verified Technicians**: Local Abuja/Lagos mechanics.
*   **Actions**: "Call Agent" or "Connect via WhatsApp" one-click links.

---

## 5. Content & Media Features

### Editorial Engine
*   **Description**: Houses articles, auto guides, and PR announcements.
*   **Front-end Components**: Directory at `/news`, details at `/news/[slug]`.
*   **Features**: Embedded YouTube review players, newsletter signups, and print article options.

### Floating AI Widget ("MyBratha")
*   **Description**: Prominently features the controversial AI bot `MyBratha` in the bottom-right corner. It answers car questions, handles test drive bookings, and estimates import duties in Pidgin/English.
