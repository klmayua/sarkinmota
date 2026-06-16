# Complete Admin Dashboard & CMS Specification - Sarkin Mota Autos (v2.0 Rebuild-Ready)

This specification details the user interface, access control configurations, workflows, and data tables for the Sarkin Mota Autos administration console and content management system.

---

## 1. Role-Based Access Control (RBAC) Permissions Matrix

| Dashboard Module | Super Admin | Editor | Dealer / Broker |
| :--- | :---: | :---: | :---: |
| **Main Dashboard** | View All | View All | View Own Analytics |
| **Articles CMS** | CRUD | CRUD | No Access |
| **Categories/Tags** | CRUD | CRUD | No Access |
| **Vehicles Catalog** | CRUD | CRUD | CRUD (Own listings only) |
| **Leads & Inquiries** | View, Edit, Assign | View, Edit | View, Edit (Assigned only) |
| **Dealers Directory** | Approve, Delete | View Only | View/Edit Own Profile |
| **Exchange Rates & Settings**| Edit, Save | No Access | No Access |
| **Audit Logs** | View Only | No Access | No Access |

*Legend: CRUD = Create, Read, Update, Delete.*

---

## 2. Granular Module Specifications

### 1. Main Dashboard Overview
*   **Visual Layout**: 4-column KPI indicator row, followed by a 2-column main area (Left: Active Leads chart, Right: Recent Activity Log feed).
*   **KPI Widgets**:
    *   *Active Inventory count*: Number of vehicles with status `AVAILABLE` or `RESERVED`.
    *   *Weekly Leads count*: Leads created in the last 7 days.
    *   *Pending Dealer Applications*: count of dealers with verification status `PENDING`.
    *   *Customs Duty Conversion rate*: % of inquiries converted to sales.
*   **Interactive Controls**: Date range filter picker (Today, Last 7 Days, Last 30 Days, Year-to-Date).

### 2. Articles (CMS Editorial)
*   **Visual Layout**: Paginated data grid with filters bar (Category filter, Status filter, Search by Title).
*   **Grid Columns**: Thumbnail Image, Title, Slug, Category, Author, Status (Draft, Published, Scheduled), Published Date, Actions (Edit, Delete, Preview).
*   **Editor Form Fields**: Title, Summary, Content Area (Block editor with rich text elements), Category Dropdown, Tags checkboxes, Scheduled publication time, Featured Image selector.
*   **Form Validations**: Title is mandatory, body must exceed 100 characters, slug must contain lowercase alphanumeric characters and hyphens only.

### 3. Vehicles Inventory Manager
*   **Visual Layout**: Dense listing table with primary image column. Includes search inputs and quick status toggles.
*   **Grid Columns**: Photo, Title, Brand, Model, Year, Price (NGN), Condition (New, Tokunbo, Local), Status (Available, Reserved, Sold), Customs Duty Paid (Yes/No badge), Added By (User ID), Actions (Edit Specs, Manage Images, Delete).
*   **Creation Wizard Steps**:
    *   *Step 1: Core details*: Title, Brand, Model, Year, VIN, Mileage, Condition, Price.
    *   *Step 2: Technical specifications*: Power (HP), Torque (Nm), Top speed, Acceleration, Gearbox, Fuel, Engine displacement.
    *   *Step 3: Customs & Legal*: Duty status checkbox, customs reference number, import declaration log.
    *   *Step 4: Media Vault*: Drag & drop file selector (min 3 images required).
    *   *Step 5: Narrative*: Description input block.

### 4. Leads Ingestion CRM
*   **Visual Layout**: Inbox style interface. Left column: Scrollable card list of incoming leads. Right column: Detailed view panel of selected lead.
*   **Data Columns**: Ticket ID, Date Received, Type (Purchase, Swap, Valuation), Customer Name, Email, Phone, Vehicle of interest, Status (New, Contacted, In Progress, Won, Lost), Assignee.
*   **Lead View Panel Features**:
    *   Customer message block.
    *   Linked vehicle specification card (clickable redirect).
    *   *Calculated Finance box* (renders amortization variables if lead came from the loan calculator).
    *   *VIN Verification log* (results of automated background check).
    *   Assigned Dealer dropdown selector.
    *   Internal notes text logger.

### 5. Settings & Exchange Rates
*   **Visual Layout**: Tabbed configuration screen (Global SEO config, Customs Rates, API Credentials).
*   **Customs Rates Fields**:
    *   `cbn_exchange_rate` (USD/NGN rate applied dynamically in calculators).
    *   Auto-sync scheduler toggle (scrapes CBN rates daily).
*   **API Configuration Fields**:
    *   OpenAI API Key (chat token generation).
    *   Carfax / AutoCheck API token credentials.
    *   SendGrid SMTP mailer configurations.

---

## 3. Operational Workflows

### Workflow 1: Dealer Listing Approval Chain

```
[Dealer Uploads Vehicle Specs]
             |
             v
[Listing status: PENDING_APPROVAL] (Hidden from public catalog)
             |
             v
[System triggers background VIN History Check]
             |
             +---> (Contains Salvage/Theft flags) ---> [Set status: BLOCKED, Email Dealer]
             |
             +---> (Clean Record) 
                         |
                         v
          [Admin receives Dashboard notification]
                         |
             +-----------+-----------+
             |                       |
      (Approve Listing)       (Reject Listing)
             |                       |
             v                       v
[Set status: AVAILABLE]     [Input Rejection Reason]
[Publish to catalog]                 |
                                     v
                            [Set status: REJECTED]
                            [Email feedback to Dealer]
```

### Workflow 2: Lead Assignment Routing
1.  **Lead Trigger**: Customer submits inquiry on a vehicle detail page.
2.  **Owner Check**: The system queries the `vehicles` table to identify the `dealer_id` associated with the vehicle.
3.  **Routing logic**:
    *   If `dealer_id` is NOT NULL: The system assigns the lead to that dealer, records the link in the `leads` table, and sends a mobile/email notification.
    *   If `dealer_id` is NULL (dealership owned): The system sets assignee to NULL, flags lead as `UNASSIGNED`, and routes it to the main Admin queue.
    *   Admin can manually update the assignee field in the Leads module.
