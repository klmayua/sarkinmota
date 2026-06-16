# Complete Content Model - Sarkin Mota Autos (v2.0 Rebuild-Ready)

This document defines the schema, field types, relationships, nullability constraints, and index requirements for all database and application state entities.

---

## 1. Core Platform Entities

### 1. User
*   **Purpose**: Manages system authentication, credentials, and role authorizations.
*   **Fields**:
    *   `id`: `UUID` (Primary Key, Auto-generated) | *Non-Nullable*
    *   `email`: `VARCHAR(255)` | *Non-Nullable, Unique, Lowercase Index*
    *   `password_hash`: `VARCHAR(255)` (Bcrypt hashed) | *Non-Nullable*
    *   `first_name`: `VARCHAR(100)` | *Non-Nullable*
    *   `last_name`: `VARCHAR(100)` | *Non-Nullable*
    *   `phone`: `VARCHAR(30)` | *Nullable*
    *   `role`: `ENUM('ADMIN', 'EDITOR', 'DEALER', 'SELLER', 'BUYER')` | *Non-Nullable, Default: 'BUYER'*
    *   `created_at`: `TIMESTAMP WITH TIME ZONE` | *Non-Nullable, Default: NOW()*
    *   `updated_at`: `TIMESTAMP WITH TIME ZONE` | *Non-Nullable, Default: NOW()*
*   **Relationships**: 
    *   One-to-One with `dealers` (via `dealers.id`).
    *   One-to-Many with `articles` (User is the author).
*   **Database Constraints**: Role check constraint, lower-case unique constraint on email.

### 2. Dealer
*   **Purpose**: Stores business profiles for independent auto brokers and franchise dealerships.
*   **Fields**:
    *   `id`: `UUID` (Primary Key, Foreign Key to `users.id` ON DELETE CASCADE) | *Non-Nullable*
    *   `company_name`: `VARCHAR(255)` | *Non-Nullable*
    *   `license_number`: `VARCHAR(100)` | *Nullable, Unique*
    *   `logo_url`: `TEXT` (CDN Link) | *Nullable*
    *   `website_url`: `TEXT` | *Nullable*
    *   `address`: `TEXT` | *Nullable*
    *   `verification_status`: `ENUM('UNVERIFIED', 'PENDING', 'VERIFIED')` | *Non-Nullable, Default: 'UNVERIFIED'*
    *   `rating`: `NUMERIC(3,2)` | *Non-Nullable, Default: 5.00, Check: 0.00 to 5.00*
    *   `created_at`: `TIMESTAMP WITH TIME ZONE` | *Non-Nullable*
*   **Relationships**:
    *   One-to-One with `users` (acts as profile extension).
    *   One-to-Many with `vehicles` (lists dealer's cars).
    *   One-to-Many with `leads` (assigned leads for follow-up).

### 3. Vehicle
*   **Purpose**: Main entity catalog storing physical and commercial details of vehicles.
*   **Fields**:
    *   `id`: `UUID` (Primary Key) | *Non-Nullable*
    *   `title`: `VARCHAR(255)` | *Non-Nullable*
    *   `slug`: `VARCHAR(255)` | *Non-Nullable, Unique Index*
    *   `brand_id`: `UUID` (FK to `brands.id` ON DELETE RESTRICT) | *Non-Nullable*
    *   `model_id`: `UUID` (FK to `models.id` ON DELETE RESTRICT) | *Non-Nullable*
    *   `dealer_id`: `UUID` (FK to `dealers.id` ON DELETE SET NULL) | *Nullable (NULL indicates direct stock)*
    *   `year`: `INT` | *Non-Nullable, Check: 1900 to Current Year + 1*
    *   `price`: `NUMERIC(15,2)` | *Nullable (NULL indicates "Call for Price")*
    *   `condition`: `ENUM('NEW', 'FOREIGN_USED', 'LOCAL_USED')` | *Non-Nullable*
    *   `mileage`: `INT` | *Non-Nullable, Check: >= 0*
    *   `fuel_type`: `ENUM('ELECTRIC', 'PETROL', 'DIESEL', 'HYBRID')` | *Non-Nullable*
    *   `gearbox`: `ENUM('AUTOMATIC', 'MANUAL', 'SINGLE_SPEED')` | *Non-Nullable*
    *   `engine_size`: `VARCHAR(50)` (e.g. "V10 5.2L") | *Nullable*
    *   `power_hp`: `INT` | *Nullable, Check: > 0*
    *   `torque_nm`: `INT` | *Nullable, Check: > 0*
    *   `acceleration_0_100`: `NUMERIC(4,2)` | *Nullable, Check: > 0*
    *   `top_speed`: `INT` | *Nullable, Check: > 0*
    *   `electric_range_km`: `INT` | *Nullable, Check: >= 0 (Required if fuel_type is ELECTRIC)*
    *   `vin`: `VARCHAR(17)` | *Non-Nullable, Unique, Check Length = 17*
    *   `customs_duty_paid`: `BOOLEAN` | *Non-Nullable, Default: FALSE*
    *   `customs_reference_no`: `VARCHAR(100)` | *Nullable*
    *   `color_exterior`: `VARCHAR(100)` | *Non-Nullable*
    *   `color_interior`: `VARCHAR(100)` | *Non-Nullable*
    *   `description`: `TEXT` (Markdown format) | *Non-Nullable*
    *   `featured_image_url`: `TEXT` | *Non-Nullable*
    *   `video_url`: `TEXT` | *Nullable*
    *   `status`: `ENUM('AVAILABLE', 'RESERVED', 'SOLD')` | *Non-Nullable, Default: 'AVAILABLE'*
    *   `created_at`: `TIMESTAMP WITH TIME ZONE` | *Non-Nullable*
    *   `updated_at`: `TIMESTAMP WITH TIME ZONE` | *Non-Nullable*
*   **Relationships**:
    *   Belongs to `Brand`, Belongs to `Model`, Belongs to `Dealer`.
    *   One-to-Many with `vehicle_images` (gallery list).
    *   One-to-Many with `leads` (inquiries regarding this car).

### 4. Vehicle Image
*   **Purpose**: Stores the multi-image gallery links for vehicle detail sliders.
*   **Fields**:
    *   `id`: `UUID` (Primary Key) | *Non-Nullable*
    *   `vehicle_id`: `UUID` (FK to `vehicles.id` ON DELETE CASCADE) | *Non-Nullable*
    *   `image_url`: `TEXT` | *Non-Nullable*
    *   `sort_order`: `INT` | *Non-Nullable, Default: 0, Check: >= 0*
*   **Relationships**: Belongs to `Vehicle`.

---

## 2. Ingestion & Content CRM Entities

### 5. Lead
*   **Purpose**: Captures and routes all platform lead actions (finance calculators, purchase forms, trade-in steppers).
*   **Fields**:
    *   `id`: `UUID` (Primary Key) | *Non-Nullable*
    *   `type`: `ENUM('VEHICLE_PURCHASE', 'VEHICLE_SWAP', 'FINANCE_APPLICATION', 'VALUATION_REQUEST', 'GENERAL_CONTACT')` | *Non-Nullable*
    *   `vehicle_id`: `UUID` (FK to `vehicles.id` ON DELETE SET NULL) | *Nullable*
    *   `swap_vehicle_details`: `JSONB` | *Nullable (Used if type is VEHICLE_SWAP)*
    *   `name`: `VARCHAR(255)` | *Non-Nullable*
    *   `email`: `VARCHAR(255)` | *Non-Nullable*
    *   `phone`: `VARCHAR(30)` | *Non-Nullable*
    *   `message`: `TEXT` | *Nullable*
    *   `finance_terms`: `JSONB` | *Nullable (Used if type is FINANCE_APPLICATION)*
    *   `assigned_dealer_id`: `UUID` (FK to `dealers.id` ON DELETE SET NULL) | *Nullable*
    *   `status`: `ENUM('NEW', 'CONTACTED', 'IN_PROGRESS', 'WON', 'LOST')` | *Non-Nullable, Default: 'NEW'*
    *   `created_at`: `TIMESTAMP WITH TIME ZONE` | *Non-Nullable*
    *   `updated_at`: `TIMESTAMP WITH TIME ZONE` | *Non-Nullable*
*   **Relationships**: Belongs to `Vehicle`, Belongs to `Dealer`.

### 6. Article (Blog CMS)
*   **Purpose**: Stores editorial post details, reviews, and political campaign statements.
*   **Fields**:
    *   `id`: `UUID` (Primary Key) | *Non-Nullable*
    *   `title`: `VARCHAR(255)` | *Non-Nullable*
    *   `slug`: `VARCHAR(255)` | *Non-Nullable, Unique Index*
    *   `category_id`: `UUID` (FK to `categories.id` ON DELETE RESTRICT) | *Non-Nullable*
    *   `author_id`: `UUID` (FK to `users.id` ON DELETE RESTRICT) | *Non-Nullable*
    *   `summary`: `TEXT` | *Non-Nullable*
    *   `content_body`: `TEXT` (HTML/Block JSON layout) | *Non-Nullable*
    *   `featured_image_url`: `TEXT` | *Non-Nullable*
    *   `status`: `ENUM('DRAFT', 'PUBLISHED', 'ARCHIVED')` | *Non-Nullable, Default: 'DRAFT'*
    *   `published_at`: `TIMESTAMP WITH TIME ZONE` | *Nullable*
    *   `created_at`: `TIMESTAMP WITH TIME ZONE` | *Non-Nullable*
*   **Relationships**: Belongs to `Category`, Belongs to `User` (Author), Many-to-Many with `tags` (via `article_tags`).
