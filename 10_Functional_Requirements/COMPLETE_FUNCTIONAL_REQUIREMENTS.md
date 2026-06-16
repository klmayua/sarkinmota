# Complete Functional Requirements - Sarkin Mota Autos (v2.0 Rebuild-Ready)

This document specifies the exact business logic, data models validations, algorithmic math formulas, and third-party API interface formats required for implementation.

---

## 1. Customs Duty & Clearing Estimator Engine

### Purpose
Calculates the estimated port clearing costs and customs duties for importing foreign used (Tokunbo) or new vehicles into Nigeria (Lagos ports or Port Harcourt).

### Input Variables
*   `vehicle_value_usd` (Decimal): FOB Purchase Price of the vehicle in USD.
*   `manufacture_year` (Integer): Model year of the vehicle.
*   `engine_cc` (Integer): Engine size in CC (set to 0 for pure electric vehicles).
*   `port_of_entry` (Enum): `LAGOS_APAPA`, `LAGOS_TINCAN`, `PORT_HARCOURT`.
*   `cbn_exchange_rate` (Decimal): Dynamic exchange rate of USD to NGN set by the Central Bank of Nigeria for customs valuations.

### Output Parameters
*   `depreciated_value_usd` (Decimal): Adjusted vehicle value based on age.
*   `surface_duty_ngn` (Decimal): Primary import tax.
*   `surcharge_ngn` (Decimal): Port development surcharge.
*   `etls_ngn` (Decimal): ECOWAS Trade Liberalization Scheme levy.
*   `ciss_ngn` (Decimal): Comprehensive Import Supervision Scheme fee.
*   `vat_ngn` (Decimal): Value Added Tax.
*   `clearing_broker_fees` (Decimal): Agent processing fees.
*   `total_landing_cost` (Decimal): Sum total of clearing and shipping.

### Mathematical Algorithm & Formulas

1.  **Vehicle Depreciated Value Calculation**:
    The Nigeria Customs Service (NCS) applies a depreciation allowance based on the age of used vehicles up to a maximum of 50%:
    $$\text{Age} = \text{Current Year} - \text{Manufacture Year}$$
    *   If $\text{Age} < 1$: $\text{Depreciation Rate} = 0\%$
    *   If $\text{Age} = 1$: $\text{Depreciation Rate} = 10\%$
    *   If $\text{Age} = 2$: $\text{Depreciation Rate} = 20\%$
    *   If $\text{Age} = 3$: $\text{Depreciation Rate} = 30\%$
    *   If $\text{Age} = 4$: $\text{Depreciation Rate} = 40\%$
    *   If $\text{Age} \ge 5$: $\text{Depreciation Rate} = 50\%$
    $$\text{Depreciated Value (USD)} = \text{vehicle\_value\_usd} \times (1 - \text{Depreciation Rate})$$

2.  **Conversion to Local Currency (CIF Value in NGN)**:
    We approximate CIF (Cost, Insurance, Freight) by adding shipping fees (assumed flat rate of $1,500 USD for regular cars, $2,500 USD for SUVs/buses):
    $$\text{CIF (USD)} = \text{Depreciated Value (USD)} + \text{Shipping Fee (USD)}$$
    $$\text{CIF (NGN)} = \text{CIF (USD)} \times \text{cbn\_exchange\_rate}$$

3.  **Duty and Tax Components**:
    *   **Surface Duty**:
        *   Standard passenger vehicles: $20\%$ of CIF (NGN).
        *   Electric Vehicles (EVs): Special green tariff rebate applied: $10\%$ of CIF (NGN).
    *   **Surcharge**: $7\%$ of Surface Duty.
    *   **ETLS Levy**: $0.5\%$ of CIF (NGN).
    *   **CISS Fee**: $1\%$ of FOB Value in NGN ($\text{vehicle\_value\_usd} \times \text{cbn\_exchange\_rate}$).
    *   **Value Added Tax (VAT)**: $7.5\%$ of $(\text{CIF} + \text{Surface Duty} + \text{Surcharge} + \text{ETLS} + \text{CISS})$.
    *   **Port Clearing Agency Broker flat rate**: ₦350,000 flat handling fee.

4.  **Final Summary Formula**:
    $$\text{Total Landing Cost} = \text{Surface Duty} + \text{Surcharge} + \text{ETLS} + \text{CISS} + \text{VAT} + \text{Broker Fee}$$

---

## 2. VIN History & Validation Engine

### Purpose
To perform automated validation and background checks on listed vehicle VINs to verify specifications, check salvage history, and prevent fraud.

### Verification Flow & Integration Steps

```
[User Submits VIN] 
       |
       v
[Validate 17-char Check Digit] ---> (Fail) ---> [Return Validation Error]
       | (Pass)
       v
[Query Carfax/AutoCheck API]
       |
       v
[Parse API Response] 
       |
       +---> [Salvage/Accident Flagged?] ---> (Yes) ---> [Block Listing, Notify Admin]
       |
       +---> [Specs Match Model Chosen?] ---> (No)  ---> [Flag Discrepancy for Review]
       |
       +---> [Valid Clean Record]        ---> (Yes) ---> [Publish Listing, Set Verified Badge]
```

### Business Rules & Edge Cases
1.  **Anti-Salvage Constraint**:
    If the third-party API payload contains parameters matching key safety flags (e.g. `is_salvage = true`, `is_junk = true`, `airbag_deployment = true`, or `odometer_rollback = true`), the listing status must immediately be set to `REJECTED`. An email warning must be sent to the listing dealer, and a system audit log created.
2.  **Duplicate VIN Check**:
    If a submitted VIN already exists in the database under a different listing with status `AVAILABLE` or `RESERVED`, the form submission must fail with the validation message: "This vehicle is already registered on our platform."

---

## 3. AI Car Match ("MyBratha") Orchestration

### Purpose
Executes semantic user matching queries by combining vector search and an LLM framework to retrieve car matches.

### Technical Architecture & RAG Flow

1.  **User Prompt Ingestion**:
    The system reads the user message string and strips any common script markup or HTML tags.
2.  **Context Construction & System Prompt**:
    The prompt is augmented with local context (Abuja location, current dollar exchange rate, and target inventory vectors).
    *System Instruction Payload (Pidgin & English hybrid)*:
    ```text
    You are MyBratha, the official AI car guide for Sarkin Mota Autos. 
    You speak in a professional yet warm tone, blending high-end business English with friendly Nigerian Pidgin details (e.g. use terms like "My Bratha", "correct ride", "clear duty").
    Ensure you represent the brand with high status. Never recommend salvage or unverified vehicles. 
    Provide specs details (HP, torque, clearance for Abuja/Lagos potholes).
    If a user is highly interested in buying, output the exact vehicle link in this format: [Model Name](/vehicles/slug) and recommend contacting Alamin Sarkinmota directly.
    ```
3.  **Semantic Vector Retrieval**:
    *   The user query is sent to an embedding model (e.g. OpenAI `text-embedding-3-small`) to generate a vector array.
    *   The system performs a Cosine Similarity search against the `vehicles` vector database index.
    *   The top 3 matching vehicle records (ID, title, price, slug, status) are extracted and appended to the LLM context.
4.  **Response Generation**:
    The LLM outputs the conversational response along with references to the matched inventory slugs.

---

## 4. Multi-Stage Trade-In (Swap) Validation Logic

### Purpose
Validates user submission details when trading in their current vehicle for an upgrade.

### Form Stepper Validation Rules

*   **Stage 1: Client & Contact Info**:
    *   `name`: Cannot be empty, minimum 3 characters.
    *   `phone`: Must match pattern `^(\+234|0)[789][01]\d{8}$` (Nigerian mobile format).
*   **Stage 2: Current Car Specs**:
    *   `mileage`: Must be $\ge 0$ and $\le 999,999$ km.
    *   `year`: Must be $\ge$ (Current Year - 15) to enforce the import limit constraint.
    *   `photos`: Minimum 5 files must be uploaded (Interior, Exterior Front, Exterior Rear, Dashboard, Engine block).
*   **Stage 3: Swap Target Check**:
    *   The selected target vehicle ID must be query-checked against database records. The listing status must return `AVAILABLE` to permit submission.
