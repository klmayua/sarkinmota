# Complete Page Inventory & Wireframe Specifications - Sarkin Mota Autos

This document specifies the routing, UI layout, actions, data requirements, and technical dependencies for every page template on the Sarkin Mota Autos platform.

---

## 1. Homepage Template (`/`)

*   **Page Name**: Homepage
*   **Routing & Hydration Strategy**: Server-Side Rendering (SSR) with Next.js dynamic hydration for carousel and interactive widgets.
*   **UI Layout & Wireframe**:
    *   **Hero Slider Viewport**: Full-bleed slider (`w-full min-h-svh relative overflow-hidden bg-black`). Inside: Background high-definition car render (or 10-second autoplay looping MP4 background video for slide 9).
    *   **Overlay Header**: Glassmorphic top navigation bar (`h-[108px] sticky z-50 backdrop-blur-md bg-transparent border-b border-white/10`).
    *   **Hero Text Container**: Positioned middle-left (`absolute z-10 bottom-[120px] left-[5%] max-w-[700px]`). Displays large Titillium header (`text-5xl md:text-7xl font-bold tracking-tight text-white`), model subtitle (`text-lg md:text-2xl text-white/90`), and gold Call-To-Action (CTA) button (`bg-gold text-black rounded-md px-10 py-4 hover:shadow-lg hover:shadow-gold/50`).
    *   **Bottom Navigation Dot Indicators**: Centered horizontal row of 9 dots (`absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20`). Active dot fills out to width (`w-12 h-[2px] bg-gold`), inactive dots remain dim (`w-12 h-[2px] bg-white/30`).
    *   **Floating Chat Trigger**: Bottom-right circular button (`fixed bottom-4 right-4 size-10 bg-primary rounded-full border border-gold/30 hover:scale-110`) displaying `/static/mybratha.svg`.
*   **Inputs**:
    *   *Path/Query Params*: None.
    *   *User Inputs*: Swipe gestures (touch devices), click carousel indicators, submit message in chat widget.
*   **Outputs**:
    *   *API Reads*: Fetches active banner slides from database (vehicle model names, slides descriptions, image paths).
    *   *Metadata*: Title: `Sarkin Mota Autos | Premium Luxury Vehicles`; Description: `Explore and import premium electric vehicles, supercars, and luxury SUVs in Abuja, Nigeria.`
*   **Primary Actions**:
    *   Click "Reserve Yours" / "Experience R8" (redirects to `/vehicles/[slug]`).
*   **Secondary Actions**:
    *   Click Hamburger icon (slides in mobile navigation sidebar overlay).
    *   Click "Contact Us" (navigates to `/contact`).
*   **Data Dependencies**: Reads from `vehicles` database table (retrieves `title`, `slug`, `featured_image_url`, and custom properties for featured slides).
*   **Related Pages**: `/vehicles/[slug]`, `/contact`, `/news`.

---

## 2. Vehicle Catalog Page (`/vehicles`)

*   **Page Name**: Vehicle Catalog
*   **Routing & Hydration Strategy**: Server-Side Rendering (SSR) with Client-Side Hydration for dynamic search, filter tags, and paginated grids.
*   **UI Layout & Wireframe**:
    *   **Header Section**: Gold title `ALL INVENTORY` centered under breadcrumbs.
    *   **Split Screen Grid Layout**: `grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 max-w-7xl mx-auto px-6 py-12`.
    *   **Left Sidebar Filter Pane**: Glassmorphic sticky menu (`bg-secondary border border-white/10 rounded-md p-6 h-fit`). Contains: Make dropdown, Model autocomplete, Price range slider (₦10M to ₦350M+), Fuel type checkboxes (Electric, Petrol, Hybrid, Diesel), Transmission toggles (Automatic, Manual, Single Speed), and Checkbox filter for "Customs Duty Paid".
    *   **Right Catalog Area**:
        *   *Top Tool Bar*: Displays active filter tags and result count ("Showing 12 vehicles found"), plus a Sort Dropdown (`Price: Low-High`, `Price: High-Low`, `Year: Newest`).
        *   *Grid List*: 3-column grid (`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`). Renders individual **Vehicle Cards**.
*   **Inputs**:
    *   *Query Params*: `?search=`, `?brand=`, `?model=`, `?min_price=`, `?max_price=`, `?fuel=`, `?transmission=`, `?duty_paid=`, `?sort=`, `?page=`.
    *   *Filter UI state*: Array of selected filter parameters.
*   **Outputs**:
    *   *API Reads*: Fetches list of matching vehicles, plus aggregated counts for sidebar checkboxes.
    *   *Metadata*: Title: `Luxury Vehicle Catalog | Sarkin Mota Autos`; Description: `Browse verified high-end executive sedans, supercars, power bikes, and luxury SUVs for sale in Abuja, Nigeria.`
*   **Primary Actions**:
    *   Click Vehicle Card (navigates to `/vehicles/[slug]`).
*   **Secondary Actions**:
    *   Check "Add to Compare" box (adds vehicle to comparison list state).
*   **Data Dependencies**: Reads `vehicles`, `brands`, and `models` tables.
*   **Related Pages**: `/vehicles/[slug]`, `/tools/compare`.

---

## 3. Vehicle Detail Page (`/vehicles/[slug]`)

*   **Page Name**: Vehicle Detail Page
*   **Routing & Hydration Strategy**: Incremental Static Regeneration (ISR) with revalidation time of 10 minutes (`revalidate: 600`). Client-side state hydration for the inquiry lead form and spec overlays.
*   **UI Layout & Wireframe**:
    *   **Main Banner Container**: `w-full h-[60vh] relative bg-black`. Displays full-size featured image overlay with radial vignette.
    *   **Grid Content Area**: `grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 max-w-7xl mx-auto px-6 py-12`.
    *   **Left Column (Media & Specs)**:
        *   *Gallery Grid*: Horizontal scrollable list of secondary images (`flex gap-4 overflow-x-auto`).
        *   *Performance Specs Grid*: 3x2 grid callout highlight. Renders boxes displaying large gold stats: 1) Acceleration (e.g. `2.78s`), 2) Power (e.g. `1015 HP`), 3) Top Speed (e.g. `350 km/h`), 4) Range (e.g. `800 km`), 5) Gearbox (e.g. `Single Speed`), 6) Fuel (e.g. `Electric`).
        *   *Description*: Rich text rendering of listing description.
    *   **Right Column (Pricing & Lead Form)**:
        *   *Sticky Widget*: `sticky top-[120px] bg-secondary border border-white/10 rounded-md p-6 shadow-xl`.
        *   *Price Box*: Large gold text showing price (e.g. `₦120,000,000` or "CALL FOR PRICE"). Displays verification badges below: "Customs Duty Cleared" or "Import Duty Unpaid".
        *   *Lead Submission Form*: Captures customer contact data. Inputs: Name, Email, Phone, Message box (preloaded: "Hi Alamin, I am interested in this vehicle..."), and Checkboxes for Financing and Swap interest.
*   **Inputs**:
    *   *Path Params*: `[slug]` (e.g. `xiaomi-yu7`).
    *   *Form Inputs*: Customer name, email, phone, message, financing interest (boolean), trade-in interest (boolean).
*   **Outputs**:
    *   *API Request*: POST to `/api/leads` (submits customer inquiry parameters).
    *   *Metadata*: Dynamic title (e.g., `2025 Xiaomi YU7 for Sale | Sarkin Mota Autos`); Dynamic Open Graph tags containing the vehicle's custom image URL.
*   **Primary Actions**:
    *   Submit Lead Inquiry Form (triggers loading spinner, validates phone format, records lead, shows success token).
*   **Secondary Actions**:
    *   "Download Spec Sheet" (generates PDF spec outline).
    *   "Share via WhatsApp" (opens link to share catalog url).
*   **Data Dependencies**: Reads `vehicles`, `vehicle_images`, `brands`, `models`, and `dealers` records matching the slug.
*   **Related Pages**: `/tools/calculator` (receives vehicle price params), `/tools/compare`.

---

## 4. Seller & Dealer Dashboard (`/sell/dashboard`)

*   **Page Name**: Seller Dashboard
*   **Routing & Hydration Strategy**: Client-Side Hydration only; page is fully wrapped in authentication gates checking JWT sessions.
*   **UI Layout & Wireframe**:
    *   **Dashboard Grid Layout**: `grid grid-cols-[240px_1fr] min-h-screen bg-black`.
    *   **Left Sidebar Navigation**: Navigation links to Dashboard Overview, Active Listings, Leads Inbox, Valuation Estimator, and Settings.
    *   **Right Panel Area**:
        *   *Top Navigation Bar*: Displays user email, notifications count, and "Log Out" button.
        *   *Metrics Ribbon*: 4-column KPI grid: Total Listings, Total Views, Active Leads, Total Sales.
        *   *Data Grid (Listings Table)*: Displays user's uploaded cars. Columns: Image, Title, Price, Status (Available, Reserved, Sold), Date Added, and Actions (Edit, Delete, Mark as Sold).
*   **Inputs**:
    *   *JWT Token*: Passed in header cookies.
    *   *Filters*: Tab toggles (All, Draft, Approved, Sold).
*   **Outputs**:
    *   *API Requests*: GET `/api/dashboard/summary`, POST `/api/vehicles/update-status`.
*   **Primary Actions**:
    *   "Add New Listing" (navigates to multi-stage step form wizard).
    *   "Update Status" dropdown changes listing state immediately.
*   **Secondary Actions**:
    *   Export Leads list to CSV.
*   **Data Dependencies**: Reads `users`, `dealers`, `vehicles`, and `leads` records filtered by authenticated dealer ID.
*   **Related Pages**: `/sell-swap`.

---

## 5. AI Car Match Portal (`/tools/ai-match`)

*   **Page Name**: AI Car Match
*   **Routing & Hydration Strategy**: Server-Side Rendering with dynamic client-side chat socket communication.
*   **UI Layout & Wireframe**:
    *   **Chat Container Layout**: `max-w-4xl mx-auto px-6 py-12 h-[calc(100vh-200px)] flex flex-col`.
    *   **Header Section**: Title `MYBRATHA AI CAR MATCH` with gold description: "Find your dream vehicle using our Pidgin-integrated AI assistant."
    *   **Messages Area**: Scrollable pane (`flex-1 overflow-y-auto mb-6 p-6 bg-secondary border border-white/10 rounded-md space-y-4`). Renders:
        *   *AI Message Bubbles*: Left-aligned gray-gold balloons containing text responses and inline cards.
        *   *User Message Bubbles*: Right-aligned solid gold balloons.
    *   **Quick Suggestions Bar**: Horizontal slider of buttons (`flex gap-2 mb-4 overflow-x-auto`). Preloaded options: "SUV for Abuja under ₦50M", "Most efficient Electric Vehicle", "Trade-in trade-up guidelines".
    *   **Input Bar**: Horizontal container (`flex gap-3`). Includes text input field (`flex-1 bg-black border border-white/20 rounded-md px-4 py-3 text-white`) and round gold send button.
*   **Inputs**:
    *   *User query string*: Entered in chat text box.
    *   *Quick prompt click*: Submits preloaded query values.
*   **Outputs**:
    *   *API Request*: POST to `/api/ai-match/chat` (sends payload containing message string and conversation history).
    *   *Metadata*: Title: `AI Car Match Assistant | Sarkin Mota Autos`.
*   **Primary Actions**:
    *   Submit Query (adds bubble to page state, triggers three-dot loader, streams response).
*   **Secondary Actions**:
    *   Click recommended vehicle link cards (opens vehicle detail page).
*   **Data Dependencies**: Integrates with inventory listings vectors indices.
*   **Related Pages**: `/vehicles/[slug]`.
