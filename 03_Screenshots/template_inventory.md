# Template Layout & Visual Styling Inventory - Sarkin Mota Autos

This inventory maps out the visual layout design, core styling tokens, and interface elements for each of the unique page templates identified on the platform.

## 1. Visual Styling Design System & Design Tokens

The site employs a premium, high-luxury aesthetic tailored to VIP car buyers in Nigeria (Abuja).

*   **Color Palette**:
    *   **Primary Background**: Deep Black (`#000000` / HSL `0 0% 0%`) and Dark Charcoal (`#0D0D0D` / HSL `0 0% 5%`).
    *   **Accents**: Premium Gold (`#C69247` to `#E6B860` / HSL `36 53% 53%` and `40 76% 64%`) representing status, prestige, and royalty (Sarkin Mota translates to "King of Cars").
    *   **Borders & Grids**: Very subtle gray/gold lines with low opacity (`rgba(255, 255, 255, 0.15)` or `rgba(198, 146, 71, 0.15)`).
*   **Typography**:
    *   **Headings**: *Titillium Web* (Black, Bold, Semi-Bold) - sleek, geometric, and modern.
    *   **Body Text**: *Inter* (Regular, Medium) - clean, readable, sans-serif.
*   **Key Visual Effects**:
    *   **Radial Gradient Vignette**: Background image overlays with dark edge vignettes to highlight luxury vehicle hero cards.
    *   **Micro-animations**: Subtle scale and gold glow transitions on buttons, carousel indicators, and navigation links.

---

## 2. Template Screenshot Archive Plan

Below is the list of unique layout templates mapped on the platform. Due to headless sandbox crawling restrictions, each template is documented here by its layout structure, content composition, and design mockups.

### 1. Homepage Template (`/`)
- **Key Elements**: Hero Carousel with 9 full-screen slides, overlay header navigation, overlay slides count, bottom horizontal dot indicators.
- **Visuals**: Full-bleed background vehicle renders, radial gold glowing loaders, and the floating "MyBratha" AI chat widget (`/static/mybratha.svg`).

### 2. Vehicle Catalog Template (`/vehicles`, `/cars/executive`, `/cars/sport`, `/cars/suvs`, `/cars/electric`, `/cars/daily`, `/bikes`, `/buses`, `/buses-vans`)
- **Key Elements**: Left sidebar for parameters filtering (Make, Model, Year, Price, Body Type, Transmission, Fuel Type, Color), right-side grid for vehicle listings.
- **Visuals**: Dark glassmorphic product cards with gold hover-borders, showing high-quality vehicle snapshots, pricing, key specs (HP, battery, doors), and "Reserve Now" CTAs.

### 3. Vehicle Detail Template (`/vehicles/[slug]`)
- **Key Elements**: Large hero background, vehicle image gallery carousel, side specification table (Engine, Transmission, Power, Torque, 0-100 km/h, Top Speed, Range for EVs), inquiry/lead generation form.
- **Visuals**: Premium layout, highlighting features like Xiaomi's hyper-OS connection (for YU7) or Audi's V10 performance.

### 4. Article Listing Template (`/news`)
- **Key Elements**: Grid layout of latest news, press releases, and announcements.
- **Visuals**: Media-rich article cards featuring luxury automotive announcements, political campaign updates, and community events.

### 5. Article Detail Template (`/news/[article-slug]`)
- **Key Elements**: Left column with long-form text, blockquotes, and embedded videos; right column with related posts, recent listings, and newsletter signup.
- **Visuals**: Large header banner, Titillium Web headings, and gold-accented sharing widgets.

### 6. Search Portal Template (`/vehicles?search=...`)
- **Key Elements**: Search bar input, search statistics, filter badges, and matching results.
- **Visuals**: Empty-state illustrations (when no vehicle matches) with a "Try AI Car Match" recommendation.

### 7. Ownership Tools Template (`/tools`, `/tools/valuation`, `/tools/history`, `/tools/estimator`)
- **Key Elements**: Service card catalog detailing the purpose of each calculator and check tool.
- **Visuals**: Gold-accented icons (graphs, shields, globes) with clear description text.

### 8. Interactive Calculator Template (`/tools/calculator`)
- **Key Elements**: Input sliders (Vehicle Price, Down Payment %, Interest Rate, Loan Term in months), calculated results display (Monthly Payment, Total Interest, Total Cost), amortization table.
- **Visuals**: Dynamic progress bars, large gold-colored figures for monthly payments.

### 9. AI Car Match Template (`/tools/ai-match`)
- **Key Elements**: Chat window for the "MyBratha" Assistant, user query suggestions, and recommended vehicles pane.
- **Visuals**: Dark chat bubbles, gold accents, and a spinning "thinking" loader.

### 10. Vehicle Comparison Template (`/tools/compare`)
- **Key Elements**: Selector dropdowns to choose up to 3 vehicles, side-by-side spec comparison grids.
- **Visuals**: Highlighted differences in spec rows (e.g. coloring the faster 0-100 time in gold).

### 11. Network Member Directory Template (`/network`, `/network/brokers`, `/network/customs`, `/network/experts`, `/network/concierge`, `/network/clubs`, `/network/technicians`, `/network/partner`)
- **Key Elements**: Map integration, list of verified professionals with badges, ratings, locations, and specialties.
- **Visuals**: Certified partner badges, direct WhatsApp/Call triggers, and booking calendar forms.

### 12. Sell or Swap Workflow Template (`/sell`, `/swap`, `/sell-swap`)
- **Key Elements**: Step-by-step multi-stage forms: 1) Vehicle Basics (VIN, Make, Model, Year, Mileage), 2) Condition Report (Exterior, Interior, Mechanical), 3) Expected Price/Swap target, 4) Photo upload, 5) Contact info.
- **Visuals**: Progress stepper, file drag-and-drop zone, glassmorphic inputs.

### 13. Seller Dashboard Template (`/sell/dashboard`)
- **Key Elements**: Statistics overview (Total views, Active listings, Leads, Offers), list of active/sold cars, lead management inbox.
- **Visuals**: Dashboard graphs, colored status pills (Approved, Pending, Sold), and list actions.

### 14. Static Info Template (`/about`, `/careers`)
- **Key Elements**: Company mission statement, founder's profile (Aliyu Mohammad), careers listing, and brand philosophy.
- **Visuals**: Monochromatic historical images, clean typography blocks, and accordion lists.

### 15. Contact Portal Template (`/contact`)
- **Key Elements**: Left side with physical address, Google map, phone, email, and social links; right side with general contact message form.
- **Visuals**: Map widget, gold input underlines, and a "Send Message" button.

### 16. Dynamic Landing Pages Template (Promotionals, Lead Gen Campaigns)
- **Key Elements**: Clean layout focused entirely on a single target (e.g., Xiaomi YU7 pre-order campaign).
- **Visuals**: Dynamic background video, short spec callouts, and a prominent reservation form.

### 17. System Error Template (`/404`, `/500`)
- **Key Elements**: Error status code display, message text, and a prominent "Return to Homepage" button.
- **Visuals**: Retro-futuristic neon red/gold warning icons, minimal interface.
