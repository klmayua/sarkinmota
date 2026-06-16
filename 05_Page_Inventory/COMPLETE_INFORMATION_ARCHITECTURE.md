# Complete Information Architecture Specification (Sarkin Mota 2.0)

This document maps out the comprehensive hierarchy, routing, page permissions, and template layouts for all 8 core platform layers in the Sarkin Mota 2.0 Ecosystem.

---

## 1. Global Navigation & Layout Shell

*   **Header Navigation Menu**:
    *   *Vehicles Dropdown*: Links to all vehicle classifications (Executive, Sport, SUV, Electric, Daily, Bikes, Buses, Vans).
    *   *Ownership Tools Dropdown*: Links to AI Match, Loan Calculator, Compare, Customs Estimator, VIN History, Valuation.
    *   *Community Dropdown*: Links to Car Owner Circle, Owner Clubs, Public Discussions.
    *   *Events Dropdown*: Links to Autofest, Expo directories, Ticketing center.
    *   *Services Dropdown*: Links to SafiMota Care Booking, Customs clearing network, import concierge.
    *   *User Auth Action*: Dynamic button ("Member Garage" / "Seller Dashboard" / "Login").
*   **Footer Structure**:
    *   *Column 1 (Marketplace)*: Executive, Sport, SUVs, Electric, Bikes, Buses, SafiMota services.
    *   *Column 2 (Ownership & Care)*: AI Match, Loan Calculator, Compare, Customs Estimator, VIN History, Valuation.
    *   *Column 3 (Ecosystem)*: Car Owner Circle, Owner Clubs, Autofest 2026, Event Directory, Partner Dealer Program.
    *   *Column 4 (Company & Press)*: News & Events, About Us, Careers, Contact, Legal Terms.

---

## 2. Platform Layers & Mapped Modules

### Layer 01: Media Ecosystem (Publishing & Editorial)
*   **Default Layout**: Grid layouts, rich media embeds, text-wrapping.
*   **Routes & Modules**:
    *   `/news` - Main news directory template.
    *   `/news/[article-slug]` - Editorial article template.
    *   `/reviews` - Vehicle test reviews (spec sheet references).
    *   `/guides/buying` - Step-by-step buyer guides.
    *   `/guides/comparison` - Compare summaries.
    *   `/market` - Valuation index charts and import policy updates.
    *   `/education` - Maintenance advice.
    *   `/stories` - Special feature profiles (supercars in Nigeria).
    *   `/opinions` - Automotive columns.
    *   `/interviews` - Interviews with key stakeholders (such as Alamin Sarkinmota).
    *   `/events/coverage` - Auto shows news feeds.
    *   `/spotlights` - Partner dealer profiles.
    *   `/reports` - Industry market analytics.
    *   `/podcasts` - Audio embeds.
    *   `/videos` - Custom video logs.
    *   `/galleries` - High-definition vehicle carrousels.

### Layer 02: Marketplace Ecosystem (Commerce)
*   **Default Layout**: Catalog page with filter sidebars and detailed pages.
*   **Routes & Modules**:
    *   `/vehicles` - General vehicle directory grid.
    *   `/vehicles/[slug]` - Detail specifications page.
    *   `/dealers` - Map-based directory of verified dealerships.
    *   `/services` - SafiMota directory of detailing and maintenance providers.
    *   `/parts` - Classified directory for OEM parts.
    *   `/accessories` - Aftermarket styling marketplace.
    *   `/tools/compare` - Dynamic column specs matrix.
    *   `/tools/search` - Search autocomplete index.
    *   `/member/saved` - User list of favorites.
    *   `/leads/inquiry` - API post endpoint for purchase offers.

### Layer 03: Community Ecosystem (Social Network)
*   **Default Layout**: Feed layout, thread blocks, profile cards.
*   **Routes & Modules**:
    *   `/circle` - Unified activity feed for car enthusiasts.
    *   `/member/[username]` - Member profile cards showing garage listings and badges.
    *   `/clubs` - Supercar owner clubs registry.
    *   `/clubs/regional` - State-level subgroups (Abuja, Lagos, Port Harcourt).
    *   `/groups/private` - Access-controlled groups (invite-only).
    *   `/groups/public` - Open topic forums.
    *   `/discussions` - Multi-thread comment sections under listings and articles.

### Layer 04: Events & Experiences Ecosystem
*   **Default Layout**: Ticket booking forms, schedules grids, map integrations.
*   **Routes & Modules**:
    *   `/events` - Event calendar directory.
    *   `/events/autofest` - Dedicated landing page for the annual Autofest.
    *   `/events/register` - Participant registration wizard.
    *   `/events/tickets` - Dynamic checkout with QR ticketing.
    *   `/events/exhibitors` - Sponsor showcase registries.

### Layer 05: Gamification (Engagement & Retention)
*   **Default Layout**: Quiz cards, progress bars, leaderboards lists.
*   **Routes & Modules**:
    *   `/challenges` - Daily trivia center (guess the engine, model specs trivia).
    *   `/challenges/leaderboards` - High-score ranks by level and points.
    *   `/member/achievements` - Badge trophy case overlay.

### Layer 06: SafiMota Care Ecosystem (Vehicle Care)
*   **Default Layout**: Appointment calendar widget, service checklist forms, records table.
*   **Routes & Modules**:
    *   `/care/safi` - SafiMota booking portal for detailing.
    *   `/care/mechanics` - Maintenance booking.
    *   `/care/tyres` - Tyre balancing and alignment.
    *   `/care/towing` - 24/7 Abuja emergency towing booking.
    *   `/care/booking` - Stage-by-stage appointment scheduler.
    *   `/garage/records` - Dynamic digital vehicle service book.
    *   `/garage/reminders` - Push notifications triggers (License, Insurance, service intervals).

### Layer 07: Financial Services Ecosystem
*   **Default Layout**: Slider parameters, dynamic comparisons lists.
*   **Routes & Modules**:
    *   `/finance` - Loan marketplace dashboard.
    *   `/finance/insurance` - Compare comprehensive insurance premiums.
    *   `/finance/warranty` - Aftermarket engine warranty booking.

### Layer 08: Professional Business Services
*   **Default Layout**: Document uploads, clearing tariff calculations, checklist maps.
*   **Routes & Modules**:
    *   `/professional/customs` - Customs clearance tracking wizard.
    *   `/professional/import` - Custom ordering VIP Import Concierge form.
    *   `/professional/valuation` - Market evaluation tool.
    *   `/professional/inspection` - Book pre-purchase inspection expert.
