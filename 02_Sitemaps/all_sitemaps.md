# Sitemap Discovery Report - Sarkin Mota Autos

## Sitemap Verification Results

A systematic check of standard XML sitemaps was conducted on `https://www.sarkinmota.ng`. All standard sitemap paths returned a `404 Not Found` response.

| Sitemap Path Tested | Status Code | Accessible |
| :--- | :---: | :---: |
| `/sitemap.xml` | 404 | No |
| `/post-sitemap.xml` | 404 | No |
| `/page-sitemap.xml` | 404 | No |
| `/category-sitemap.xml` | 404 | No |
| `/tag-sitemap.xml` | 404 | No |
| `/author-sitemap.xml` | 404 | No |
| `/news-sitemap.xml` | 404 | No |
| `/sitemap_index.xml` | 404 | No |

## Alternative Route Discovery

Because standard sitemaps were unavailable, URL discovery was performed via **recursive client-side route extraction from Next.js JavaScript chunks** (Webpack assets) and payload harvesting from the hydration state.

This method successfully extracted the entire application routing table, mapping **38 key routes** across vehicle inventories, ownership tools, network channels, and seller portals.

### Discovered URL List

The complete list of mapped routes has been saved to [all_urls.csv](file:///C:/Users/hp/Desktop/KLM2026/SarkinMota/02_Sitemaps/all_urls.csv).

#### Mapped Routes:
1. **Homepage & Primary Portals**
   - `/` (Sarkin Mota Autos)
2. **Vehicle Details (`/vehicles/[slug]`)**
   - `/vehicles/xiaomi-yu7` (Xiaomi YU7)
   - `/vehicles/audi-r8` (Audi R8)
   - `/vehicles/gle-63s` (Mercedes-AMG GLE 63S)
   - `/vehicles/bmw-i7` (BMW i7)
   - `/vehicles/cybertruck` (Tesla Cybertruck)
   - `/vehicles/nissan-patrol` (Nissan Patrol)
   - `/vehicles/stelato-s9` (Stelato S9)
3. **Vehicle Catalogs & Categories**
   - `/vehicles` (All Vehicles Catalogue)
   - `/cars/executive` (Executive Class)
   - `/cars/sport` (Sport & Performance)
   - `/cars/suvs` (Premium SUVs)
   - `/cars/electric` (Electric Vehicles)
   - `/cars/daily` (Daily Drivers)
   - `/bikes` (Power Bikes Catalog)
   - `/buses` (Executive Buses)
   - `/buses-vans` (Buses & Vans)
4. **Ownership & Valuation Tools**
   - `/tools` (Tools Overview Portal)
   - `/tools/ai-match` (AI Car Match - "MyBratha" Assistant)
   - `/tools/calculator` (Loan & Finance Calculator)
   - `/tools/compare` (Vehicle Comparison Engine)
   - `/tools/estimator` (Customs Duty & Importation Estimator)
   - `/tools/history` (Vehicle VIN History & Background Check)
   - `/tools/valuation` (Market Value & Evaluation Estimator)
5. **Sarkin Mota Networks**
   - `/network` (Network Landing Portal)
   - `/network/brokers` (Auto Broker Channel)
   - `/network/customs` (Customs Clearing Agents Network)
   - `/network/experts` (Inspections & Valuers Expert Group)
   - `/network/concierge` (VIP Importation Concierge)
   - `/network/clubs` (Exclusive Supercar Clubs)
   - `/network/technicians` (Verified Maintenance Technicians)
   - `/network/partner` (Dealer Partner Network)
6. **Marketplace Workflows**
   - `/sell` (Sell Vehicle Page)
   - `/swap` (Swap Vehicle Page)
   - `/sell-swap` (Integrated Sell or Swap Form)
   - `/sell/dashboard` (Seller Dashboard)
7. **Company & Content**
   - `/news` (News & Events)
   - `/about` (About Sarkin Mota Autos)
   - `/contact` (Contact Us)
   - `/careers` (Careers Portal)
