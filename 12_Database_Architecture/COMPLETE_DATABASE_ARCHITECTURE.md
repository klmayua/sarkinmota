# Complete Database Architecture Specification (Sarkin Mota 2.0)

This document provides the complete, normalized SQL DDL schema (PostgreSQL compatible) designed to support the entire Sarkin Mota 2.0 Ecosystem, including SafiMota care services, community feeds, ticketing systems, and financial calculators.

---

## 1. Complete Database SQL Schema (DDL Script)

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================================================================
-- 1. BASE SYSTEM & USERS TABLES
-- =========================================================================

CREATE TYPE user_role AS ENUM ('ADMIN', 'EDITOR', 'DEALER', 'SELLER', 'BUYER');
CREATE TYPE verification_status AS ENUM ('UNVERIFIED', 'PENDING', 'VERIFIED');
CREATE TYPE member_tier AS ENUM ('REGISTERED', 'PREMIUM', 'ELITE', 'COLLECTOR');

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(30) NULL,
    role user_role NOT NULL DEFAULT 'BUYER',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_users_email_lower ON users (LOWER(email));

CREATE TABLE dealers (
    id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    company_name VARCHAR(255) NOT NULL,
    license_number VARCHAR(100) NULL UNIQUE,
    logo_url TEXT NULL,
    website_url TEXT NULL,
    address TEXT NULL,
    verification_status verification_status NOT NULL DEFAULT 'UNVERIFIED',
    rating NUMERIC(3, 2) NOT NULL DEFAULT 5.00 CHECK (rating >= 0.00 AND rating <= 5.00),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================================
-- 2. MARKETPLACE CATALOG TABLES
-- =========================================================================

CREATE TYPE vehicle_condition AS ENUM ('NEW', 'FOREIGN_USED', 'LOCAL_USED');
CREATE TYPE fuel_type AS ENUM ('ELECTRIC', 'PETROL', 'DIESEL', 'HYBRID');
CREATE TYPE gearbox_type AS ENUM ('AUTOMATIC', 'MANUAL', 'SINGLE_SPEED');
CREATE TYPE vehicle_status AS ENUM ('AVAILABLE', 'RESERVED', 'SOLD');

CREATE TABLE brands (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    logo_url TEXT NULL
);

CREATE TABLE models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand_id UUID NOT NULL REFERENCES brands(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    body_type VARCHAR(50) NOT NULL CHECK (body_type IN ('SEDAN', 'SUV', 'COUPE', 'TRUCK', 'VAN', 'BIKE', 'BUS'))
);

CREATE TABLE vehicles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    brand_id UUID NOT NULL REFERENCES brands(id) ON DELETE RESTRICT,
    model_id UUID NOT NULL REFERENCES models(id) ON DELETE RESTRICT,
    dealer_id UUID NULL REFERENCES dealers(id) ON DELETE SET NULL,
    year INT NOT NULL CHECK (year >= 1900 AND year <= EXTRACT(YEAR FROM CURRENT_DATE) + 1),
    price NUMERIC(15, 2) NULL CHECK (price >= 0),
    condition vehicle_condition NOT NULL,
    mileage INT NOT NULL CHECK (mileage >= 0),
    fuel_type fuel_type NOT NULL,
    gearbox gearbox_type NOT NULL,
    engine_size VARCHAR(50) NULL,
    power_hp INT NULL CHECK (power_hp > 0),
    torque_nm INT NULL CHECK (torque_nm > 0),
    acceleration_0_100 NUMERIC(4, 2) NULL CHECK (acceleration_0_100 > 0),
    top_speed INT NULL CHECK (top_speed > 0),
    electric_range_km INT NULL CHECK (electric_range_km >= 0),
    vin VARCHAR(17) NOT NULL UNIQUE CHECK (LENGTH(vin) = 17),
    customs_duty_paid BOOLEAN NOT NULL DEFAULT FALSE,
    customs_reference_no VARCHAR(100) NULL,
    color_exterior VARCHAR(100) NOT NULL,
    color_interior VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    featured_image_url TEXT NOT NULL,
    video_url TEXT NULL,
    status vehicle_status NOT NULL DEFAULT 'AVAILABLE',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vehicle_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    sort_order INT NOT NULL DEFAULT 0 CHECK (sort_order >= 0)
);

-- =========================================================================
-- 3. CONTENT & EDITORIAL CMS TABLES
-- =========================================================================

CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
    author_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    summary TEXT NOT NULL,
    content_body TEXT NOT NULL,
    featured_image_url TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'PUBLISHED', 'ARCHIVED')),
    published_at TIMESTAMP WITH TIME ZONE NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE article_tags (
    article_id UUID NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (article_id, tag_id)
);

-- =========================================================================
-- 4. COMMUNITY & MEMBER TABLES
-- =========================================================================

CREATE TABLE members (
    id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    username VARCHAR(100) NOT NULL UNIQUE,
    avatar_url TEXT NULL,
    tier member_tier NOT NULL DEFAULT 'REGISTERED',
    points INT NOT NULL DEFAULT 0 CHECK (points >= 0),
    bio TEXT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_members_username ON members (LOWER(username));

CREATE TABLE groups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NULL,
    type VARCHAR(50) NOT NULL DEFAULT 'PUBLIC' CHECK (type IN ('PUBLIC', 'PRIVATE')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    group_id UUID NULL REFERENCES groups(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    image_url TEXT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL CHECK (type IN ('LIKE', 'LOVE', 'CLAP', 'FIRE')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_post_member_reaction UNIQUE (post_id, member_id)
);

CREATE TABLE follows (
    follower_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    following_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, following_id)
);

CREATE TABLE badges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    icon_url TEXT NOT NULL
);

CREATE TABLE member_achievements (
    member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    badge_id UUID NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
    unlocked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (member_id, badge_id)
);

-- =========================================================================
-- 5. EVENTS & TICKETING TABLES
-- =========================================================================

CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    ticket_price NUMERIC(12, 2) NOT NULL DEFAULT 0.00 CHECK (ticket_price >= 0.00),
    max_capacity INT NULL CHECK (max_capacity > 0)
);

CREATE TABLE registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'CANCELLED')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_event_member_registration UNIQUE (event_id, member_id)
);

CREATE TABLE tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    registration_id UUID NOT NULL REFERENCES registrations(id) ON DELETE CASCADE,
    qr_code VARCHAR(255) NOT NULL UNIQUE,
    is_checked_in BOOLEAN NOT NULL DEFAULT FALSE,
    checked_in_at TIMESTAMP WITH TIME ZONE NULL
);

CREATE TABLE sponsors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    company_name VARCHAR(255) NOT NULL,
    tier VARCHAR(50) NOT NULL CHECK (tier IN ('PLATINUM', 'GOLD', 'SILVER', 'BRONZE')),
    logo_url TEXT NULL
);

CREATE TABLE exhibitors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    company_name VARCHAR(255) NOT NULL,
    booth_number VARCHAR(50) NOT NULL,
    description TEXT NULL
);

-- =========================================================================
-- 6. SAFIMOTA VEHICLE CARE TABLES
-- =========================================================================

CREATE TABLE service_providers (
    id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('DETAIL_SHOP', 'MECHANIC', 'TYRE_SHOP', 'BATTERY_SHOP', 'TOW_SERVICE')),
    location VARCHAR(255) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    whatsapp VARCHAR(30) NULL,
    photo_url TEXT NULL,
    badge_verified BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider_id UUID NOT NULL REFERENCES service_providers(id) ON DELETE CASCADE,
    member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    vehicle_id UUID NULL REFERENCES vehicles(id) ON DELETE SET NULL,
    appointment_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'SCHEDULED' CHECK (status IN ('SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE service_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    provider_id UUID NOT NULL REFERENCES service_providers(id) ON DELETE RESTRICT,
    booking_id UUID NULL REFERENCES bookings(id) ON DELETE SET NULL,
    description TEXT NOT NULL,
    price NUMERIC(15, 2) NOT NULL CHECK (price >= 0),
    mileage_at_service INT NULL CHECK (mileage_at_service >= 0),
    service_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE reminders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL CHECK (type IN ('LICENSE', 'INSURANCE', 'MAINTENANCE', 'WARRANTY')),
    due_date DATE NOT NULL,
    is_triggered BOOLEAN NOT NULL DEFAULT FALSE,
    triggered_at TIMESTAMP WITH TIME ZONE NULL
);

-- =========================================================================
-- 7. FINANCIAL SERVICES TABLES
-- =========================================================================

CREATE TABLE financing_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    loan_amount NUMERIC(15, 2) NOT NULL CHECK (loan_amount > 0),
    down_payment NUMERIC(15, 2) NOT NULL CHECK (down_payment >= 0),
    term_months INT NOT NULL CHECK (term_months > 0),
    interest_rate NUMERIC(5, 2) NOT NULL CHECK (interest_rate >= 0),
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE insurance_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    member_id UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    coverage_type VARCHAR(50) NOT NULL CHECK (coverage_type IN ('COMPREHENSIVE', 'THIRD_PARTY')),
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'QUOTED', 'COMPLETED')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =========================================================================
-- 8. COMMUNICATIONS & ADMINISTRATIVE AUDITS TABLES
-- =========================================================================

CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NULL REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(255) NOT NULL,
    table_name VARCHAR(100) NOT NULL,
    record_id UUID NOT NULL,
    old_value JSONB NULL,
    new_value JSONB NULL,
    ip_address VARCHAR(45) NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_logs_created_at ON audit_logs (created_at DESC);
```
