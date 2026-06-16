# Complete Content Architecture Specification (Sarkin Mota 2.0)

This document maps out the entity attributes, fields, types, relationships, and structural dependencies for all database collections powering the Sarkin Mota 2.0 Ecosystem.

---

## 1. Content Entities (Media & Editorial)

### 1. `articles`
*   **Purpose**: Stores written posts, reviews, and campaign announcements.
*   **Fields**:
    *   `id`: `UUID` (PK) | *Non-Nullable*
    *   `title`: `VARCHAR(255)` | *Non-Nullable*
    *   `slug`: `VARCHAR(255)` | *Non-Nullable, Unique*
    *   `category_id`: `UUID` (FK to `categories.id`) | *Non-Nullable*
    *   `author_id`: `UUID` (FK to `users.id`) | *Non-Nullable*
    *   `summary`: `TEXT` | *Non-Nullable*
    *   `content_body`: `TEXT` | *Non-Nullable*
    *   `featured_image_url`: `TEXT` | *Non-Nullable*
    *   `status`: `VARCHAR(50)` (DRAFT, PUBLISHED, ARCHIVED) | *Non-Nullable, Default: 'DRAFT'*
    *   `published_at`: `TIMESTAMP WITH TIME ZONE` | *Nullable*
*   **Relationships**: Belongs to Category, Belongs to User (Author), Many-to-Many with Tags.
*   **Dependencies**: Category and User must exist.

### 2. `categories` & `tags`
*   **Purpose**: Taxonomy labeling for media posts.
*   **Fields**:
    *   `id`: `UUID` (PK), `name`: `VARCHAR(100)`, `slug`: `VARCHAR(100)` (Unique).

### 3. `videos` & `galleries`
*   **Purpose**: Stores media playlists and carrousel packages.
*   **Fields**:
    *   `id`: `UUID` (PK), `title`: `VARCHAR(255)`, `media_url`: `TEXT`, `parent_article_id`: `UUID` (FK to `articles.id`, Nullable).

---

## 2. Marketplace Entities (Commerce)

### 4. `vehicles`
*   **Purpose**: Core catalog items (cars, power bikes, executive buses).
*   **Fields**:
    *   `id`: `UUID` (PK), `title`: `VARCHAR(255)`, `slug`: `VARCHAR(255)` (Unique), `brand_id`: `UUID` (FK), `model_id`: `UUID` (FK), `year`: `INT`, `price`: `NUMERIC(15,2)` (Nullable), `condition`: `VARCHAR(50)`, `mileage`: `INT`, `fuel_type`: `VARCHAR(50)`, `gearbox`: `VARCHAR(50)`, `vin`: `VARCHAR(17)` (Unique), `customs_duty_paid`: `BOOLEAN`, `status`: `VARCHAR(50)` (AVAILABLE, RESERVED, SOLD).

### 5. `vehicle_brands` & `vehicle_models`
*   **Purpose**: Inventory taxonomies (e.g. Xiaomi -> YU7).
*   **Fields**:
    *   `brand_id`: `UUID` (PK), `name`: `VARCHAR(100)` (Unique), `slug`: `VARCHAR(100)` (Unique).
    *   `model_id`: `UUID` (PK), `brand_id`: `UUID` (FK), `name`: `VARCHAR(100)`, `slug`: `VARCHAR(100)` (Unique), `body_type`: `VARCHAR(50)`.

### 6. `dealers` & `listings`
*   **Purpose**: Dealer profiles and links to inventory.
*   **Fields**:
    *   `id`: `UUID` (PK, FK to `users.id`), `company_name`: `VARCHAR(255)`, `verification_status`: `VARCHAR(50)`.
    *   `listing_id`: `UUID` (PK), `vehicle_id`: `UUID` (FK), `dealer_id`: `UUID` (FK), `is_featured`: `BOOLEAN` (Default: FALSE).

### 7. `inquiries` (Leads)
*   **Purpose**: Capture user purchase, loan, and swap proposals.
*   **Fields**:
    *   `id`: `UUID` (PK), `type`: `VARCHAR(50)` (PURCHASE, SWAP, FINANCE), `vehicle_id`: `UUID` (FK, Nullable), `swap_vehicle_details`: `JSONB` (Nullable), `finance_terms`: `JSONB` (Nullable), `name`: `VARCHAR(255)`, `email`: `VARCHAR(255)`, `phone`: `VARCHAR(30)`, `status`: `VARCHAR(50)` (NEW, CONTACTED, LOST, WON).

---

## 3. Community Entities (Social)

### 8. `members`
*   **Purpose**: Member profiles within the Car Owner Circle.
*   **Fields**:
    *   `id`: `UUID` (PK, FK to `users.id`), `username`: `VARCHAR(100)` (Unique), `avatar_url`: `TEXT`, `tier`: `VARCHAR(50)` (REGISTERED, PREMIUM, ELITE, COLLECTOR).

### 9. `groups` & `posts`
*   **Purpose**: Social threads and supercar clubs content.
*   **Fields**:
    *   `group_id`: `UUID` (PK), `name`: `VARCHAR(255)`, `type`: `VARCHAR(50)` (PUBLIC, PRIVATE).
    *   `post_id`: `UUID` (PK), `member_id`: `UUID` (FK), `group_id`: `UUID` (FK, Nullable), `content`: `TEXT`.

### 10. `comments`, `reactions`, `follows`
*   **Purpose**: Social engagement mappings.
*   **Fields**:
    *   `comment_id`: `UUID` (PK), `post_id`: `UUID` (FK), `member_id`: `UUID` (FK), `content`: `TEXT`.
    *   `reaction_id`: `UUID` (PK), `post_id`: `UUID` (FK), `member_id`: `UUID` (FK), `type`: `VARCHAR(50)` (LIKE, LOVE).
    *   `follower_id`: `UUID` (FK), `following_id`: `UUID` (FK) | *Composite PK*.

### 11. `badges` & `achievements`
*   **Purpose**: Member levels and gamification achievements.
*   **Fields**:
    *   `id`: `UUID` (PK), `title`: `VARCHAR(100)`, `icon_url`: `TEXT`.

---

## 4. Events Entities

### 12. `events` & `registrations`
*   **Purpose**: Tracks Autofest and expo bookings.
*   **Fields**:
    *   `id`: `UUID` (PK), `title`: `VARCHAR(255)`, `description`: `TEXT`, `start_time`: `TIMESTAMP`, `location`: `VARCHAR(255)`.
    *   `registration_id`: `UUID` (PK), `event_id`: `UUID` (FK), `member_id`: `UUID` (FK), `status`: `VARCHAR(50)` (PENDING, APPROVED).

### 13. `sponsors`, `exhibitors`, `tickets`
*   **Purpose**: Business logistics and sales for events.
*   **Fields**:
    *   `id`: `UUID` (PK), `company_name`: `VARCHAR(255)`, `tier`: `VARCHAR(50)` (PLATINUM, GOLD, SILVER).
    *   `ticket_id`: `UUID` (PK), `event_id`: `UUID` (FK), `registration_id`: `UUID` (FK), `qr_code`: `VARCHAR(255)` (Unique), `price`: `NUMERIC(12,2)`.

---

## 5. SafiMota Care Entities

### 14. `service_providers` (Mechanics, Detailers)
*   **Purpose**: Service provider database profiles.
*   **Fields**:
    *   `id`: `UUID` (PK, FK to `users.id`), `name`: `VARCHAR(255)`, `category`: `VARCHAR(50)` (DETAIL_SHOP, MECHANIC, TYRE_SHOP).

### 15. `bookings`
*   **Purpose**: Care service appointments logging.
*   **Fields**:
    *   `id`: `UUID` (PK), `provider_id`: `UUID` (FK), `member_id`: `UUID` (FK), `appointment_time`: `TIMESTAMP`, `status`: `VARCHAR(50)` (SCHEDULED, IN_PROGRESS, COMPLETED, CANCELLED).

### 16. `service_records` & `maintenance_records`
*   **Purpose**: Digital service log bookkeeping.
*   **Fields**:
    *   `record_id`: `UUID` (PK), `vehicle_id`: `UUID` (FK), `provider_id`: `UUID` (FK), `description`: `TEXT`, `price`: `NUMERIC(15,2)`.

### 17. `reminders`
*   **Purpose**: Automated scheduler logs (License, Insurance, service intervals).
*   **Fields**:
    *   `id`: `UUID` (PK), `vehicle_id`: `UUID` (FK), `type`: `VARCHAR(50)` (INSURANCE, LICENSE, MAINTENANCE), `due_date`: `DATE`.

---

## 6. Financial Services Entities

### 18. `financing_requests` & `insurance_requests`
*   **Purpose**: Stores loan applications and comprehensive insurance requests.
*   **Fields**:
    *   `id`: `UUID` (PK), `member_id`: `UUID` (FK), `vehicle_id`: `UUID` (FK), `amount`: `NUMERIC(15,2)`, `finance_details`: `JSONB` (amortization terms).

### 19. `quotations`
*   **Purpose**: Stores clearing rates and import concierge proposals.
*   **Fields**:
    *   `id`: `UUID` (PK), `request_type`: `VARCHAR(50)` (CLEARING, CONCIERGE), `fob_price`: `NUMERIC(12,2)`, `calculated_duty`: `NUMERIC(12,2)`.

---

## 7. Administrative Entities

### 20. `users`, `roles`, `permissions`, `logs`, `notifications`
*   **Purpose**: Framework authorization, activity audit logs, and push system notifications.
*   **Fields**:
    *   `user_id`: `UUID` (PK), `email`: `VARCHAR(255)`, `password_hash`: `VARCHAR(255)`, `role_id`: `UUID` (FK).
    *   `log_id`: `UUID` (PK), `user_id`: `UUID` (FK), `action`: `VARCHAR(255)`, `ip_address`: `VARCHAR(45)`, `timestamp`: `TIMESTAMP`.
    *   `notification_id`: `UUID` (PK), `user_id`: `UUID` (FK), `title`: `VARCHAR(255)`, `message`: `TEXT`, `is_read`: `BOOLEAN` (Default: FALSE).
