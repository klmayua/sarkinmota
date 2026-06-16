# Navigation Discovery Report - Sarkin Mota Autos

This report documents all navigation systems, menus, links, and triggers found on the Sarkin Mota Autos platform.

## 1. Header Navigation Layout

The header uses a centered grid layout (`grid-cols-[1fr_auto_1fr]`) designed for high-end, luxury presentation:
- **Left Column**: Hamburger Menu button, main drop-down menu triggers ("VEHICLES", "OWNERSHIP TOOLS", "SARKIN MOTA NETWORK").
- **Center Column**: Clickable Brand Logo (`/`).
- **Right Column**: Main drop-down menu trigger ("SELL OR SWAP"), flat links ("NEWS & EVENTS", "ABOUT", "CONTACT US").

### Interactive Dropdowns (Mega Menus)
- **VEHICLES**:
  - Executive Class (`/cars/executive`)
  - Sport & Performance (`/cars/sport`)
  - Premium SUVs (`/cars/suvs`)
  - Electric Vehicles (`/cars/electric`)
  - Daily Drivers (`/cars/daily`)
  - Power Bikes (`/bikes`)
  - Executive Buses (`/buses`)
  - Buses & Vans (`/buses-vans`)
- **OWNERSHIP TOOLS**:
  - AI Car Match (`/tools/ai-match`) - Powered by "MyBratha" Assistant
  - Loan Calculator (`/tools/calculator`)
  - Compare Cars (`/tools/compare`)
  - Customs Estimator (`/tools/estimator`)
  - VIN History Check (`/tools/history`)
  - Valuation Tool (`/tools/valuation`)
- **SARKIN MOTA NETWORK**:
  - Auto Brokers (`/network/brokers`)
  - Customs Specialists (`/network/customs`)
  - Inspection Experts (`/network/experts`)
  - Importation Concierge (`/network/concierge`)
  - Supercar Clubs (`/network/clubs`)
  - Maintenance Technicians (`/network/technicians`)
  - Dealer Partners (`/network/partner`)
- **SELL OR SWAP**:
  - Sell Vehicle (`/sell`)
  - Swap Vehicle (`/swap`)
  - Sell or Swap Portal (`/sell-swap`)
  - Seller Dashboard (`/sell/dashboard`)

---

## 2. Footer Navigation

The footer utilizes a dark, premium aesthetic using radial background gradients and gold-accented typography. It is structured into four main columns:

### Column 1: Products
- [Executive Class](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/cars/executive)
- [Sport & Performance](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/cars/sport)
- [Premium SUVs](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/cars/suvs)
- [Electric Vehicles](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/cars/electric)
- [Power Bikes](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/bikes)
- [Executive Buses](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/buses)

### Column 2: Services
- [AI Car Match](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/tools/ai-match)
- [Loan Calculator](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/tools/calculator)
- [Compare Cars](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/tools/compare)
- [Auto Brokers](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/network/brokers)
- [Customs Specialists](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/network/customs)
- [Sell or Swap](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/sell-swap)

### Column 3: Company
- [News & Events](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/news)
- [About Us](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/about)
- [Careers](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/careers)
- [Contact](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/contact)

### Column 4: Follow Us (Social Media Profiles)
- Twitter/X (`https://twitter.com`)
- YouTube (`https://youtube.com`)
- Facebook (`https://facebook.com`)
- TikTok (`https://tiktok.com`)
- Instagram (`https://instagram.com`)

---

## 3. Sidebar & Mobile Navigation

- **Hamburger Menu Trigger**: Located in the top-left corner of the header. Clicking it reveals a full-height overlay sidebar.
- **Sidebar Contents**:
  - Unified Search Bar for vehicle make, model, or category.
  - Detailed catalog listing with accordions.
  - Links to "Seller Portal" and "User Registration/Login".
  - Live customer support trigger ("MyBratha" Assistant).

---

## 4. Breadcrumbs

On nested vehicle listing and detail pages, the system implements structured breadcrumbs to guide search bots and visitors:
- **Vehicle Detail**: `Home > Vehicles > [Brand] > [Model]` (e.g. `Home > Vehicles > Xiaomi > YU7`)
- **News Detail**: `Home > News & Events > [Article Category] > [Article Title]`
- **Tools**: `Home > Ownership Tools > [Tool Name]`
