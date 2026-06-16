# Complete API Architecture Specification (Sarkin Mota 2.0)

This document specifies the REST API endpoints, request payloads, response formats, and authentication access rules for the Sarkin Mota 2.0 Ecosystem.

---

## 1. Authentication & Global Headers

All protected endpoints require a JWT token passed in the authorization header:
`Authorization: Bearer <JWT_TOKEN>`

---

## 2. API Endpoints by Layer

### 1. Media Ecosystem (`layer_01_media`)

#### GET `/api/articles`
*   **Method**: `GET`
*   **Access**: Anonymous (Public)
*   **Query Parameters**: `?category=slug&tag=slug&limit=10&page=1`
*   **Response Schema**:
    ```json
    {
      "success": true,
      "data": [
        {
          "id": "uuid",
          "title": "Xiaomi YU7 Review",
          "slug": "xiaomi-yu7-review",
          "summary": "Detailed look at the new EV.",
          "featured_image_url": "https://cdn.sarkinmota.ng/images/yu7.png",
          "published_at": "2026-06-16T09:00:00Z"
        }
      ],
      "pagination": { "total": 45, "limit": 10, "page": 1 }
    }
    ```

#### POST `/api/articles`
*   **Method**: `POST`
*   **Access**: Protected (Role: `ADMIN`, `EDITOR`)
*   **Request JSON Payload**:
    ```json
    {
      "title": "Audi R8 Performance Test",
      "summary": "Mid-engine V10 testing.",
      "content_body": "Full body text...",
      "category_id": "uuid",
      "featured_image_url": "https://cdn.sarkinmota.ng/images/r8.png",
      "tags": ["uuid-1", "uuid-2"]
    }
    ```
*   **Response Schema**: Status `201 Created` with created article JSON.

---

### 2. Marketplace Commerce (`layer_02_marketplace`)

#### GET `/api/vehicles`
*   **Method**: `GET`
*   **Access**: Anonymous (Public)
*   **Query Parameters**: `?brand=slug&min_price=10000000&max_price=90000000&condition=TOKUNBO&sort=price_asc`
*   **Response Schema**: Renders matching vehicles array.

#### POST `/api/vehicles`
*   **Method**: `POST`
*   **Access**: Protected (Role: `ADMIN`, `DEALER`)
*   **Request JSON Payload**:
    ```json
    {
      "title": "2025 Mercedes-AMG GLE 63S",
      "brand_id": "uuid",
      "model_id": "uuid",
      "year": 2025,
      "price": 185000000.00,
      "condition": "FOREIGN_USED",
      "mileage": 1200,
      "fuel_type": "PETROL",
      "gearbox": "AUTOMATIC",
      "vin": "WDBUF63S123456789",
      "customs_duty_paid": true,
      "color_exterior": "Obsidian Black",
      "color_interior": "Red Leather",
      "description": "Mint condition AMG SUV.",
      "featured_image_url": "https://cdn.sarkinmota.ng/images/gle.png"
    }
    ```
*   **Response Schema**: Status `201 Created` with the vehicle catalog object.

---

### 3. Community Social Network (`layer_03_community`)

#### POST `/api/community/posts`
*   **Method**: `POST`
*   **Access**: Protected (Role: `BUYER`, `DEALER`, `ADMIN` - must have a registered member profile)
*   **Request JSON Payload**:
    ```json
    {
      "content": "Just ordered my cybertruck clearing documents from Apapa. Correct clearing broker!",
      "image_url": "https://cdn.sarkinmota.ng/uploads/ct_ports.png",
      "group_id": "uuid"
    }
    ```
*   **Response Schema**: Status `201 Created` containing post object with member details.

---

### 4. Events & Ticketing (`layer_04_events`)

#### POST `/api/events/tickets/purchase`
*   **Method**: `POST`
*   **Access**: Protected (Role: `BUYER` / Registered member)
*   **Request JSON Payload**:
    ```json
    {
      "event_id": "uuid",
      "payment_reference": "pay_tx_12345678"
    }
    ```
*   **Response Schema**:
    ```json
    {
      "success": true,
      "ticket": {
        "id": "uuid",
        "qr_code": "SM-EVENT-TICKET-HASH-12345",
        "price": 10000.00
      }
    }
    ```

---

### 5. SafiMota Care Booking (`layer_06_vehicle_care`)

#### POST `/api/care/bookings`
*   **Method**: `POST`
*   **Access**: Protected (Role: `BUYER` / Registered member)
*   **Request JSON Payload**:
    ```json
    {
      "provider_id": "uuid",
      "vehicle_id": "uuid",
      "appointment_time": "2026-07-01T10:00:00Z"
    }
    ```
*   **Response Schema**: Status `201 Created` returning scheduled appointment object.

---

### 6. Customs Clearing Duty Estimator (`layer_08_professional_services`)

#### POST `/api/tools/estimate-duty`
*   **Method**: `POST`
*   **Access**: Anonymous (Public)
*   **Request JSON Payload**:
    ```json
    {
      "value_usd": 45000.00,
      "manufacture_year": 2022,
      "is_electric": true,
      "port_of_entry": "LAGOS_APAPA"
    }
    ```
*   **Response Schema**:
    ```json
    {
      "success": true,
      "depreciated_value_usd": 22500.00,
      "cif_value_ngn": 37200000.00,
      "surface_duty_ngn": 3720000.00,
      "surcharge_ngn": 260400.00,
      "etls_ngn": 186000.00,
      "vat_ngn": 3102480.00,
      "total_landing_cost": 7618880.00
    }
    ```
