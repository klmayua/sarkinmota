# Complete Stitch Design Brief (Sarkin Mota 2.0 UI/UX Layouts)

This brief provides the detailed UI/UX visual design specification, layout structure, responsive grids, and design token classes required to implement the Sarkin Mota Autos platform.

---

## 1. Visual Token System & Base Styling Configurations

### Core Color Palette (HSL & HEX definitions)
*   `bg-canvas` (Background canvas): HSL `0 0% 0%` / `#000000` (Deepest black).
*   `bg-panel` (Secondary panels): HSL `0 0% 5%` / `#0D0D0D` (Charcoal black, semi-transparent backdrop).
*   `border-gold` (Primary gold accent): HSL `36 53% 53%` / `#C69247` (Brushed matte gold).
*   `border-gold-glow` (Active highlights): HSL `40 76% 64%` / `#E6B860` (Bright gold).
*   `text-primary` (Titles & values): HSL `0 0% 100%` / `#FFFFFF` (Pure white).
*   `text-muted` (Descriptions): HSL `0 0% 60%` / `#999999` (Mid-gray).
*   `text-gold` (Key values highlight): HSL `36 53% 53%` / `#C69247`.

### Typographic Specifications
*   **Headings**: *Titillium Web*, uppercase, tracking-wide, bold/black weights.
*   **Body & Elements**: *Inter*, tracking-normal, regular/medium/semi-bold weights.

### Responsive Breakpoints
*   `sm`: `640px` (Mobile landscape)
*   `md`: `768px` (Tablets)
*   `lg`: `1024px` (Laptops / small desktops)
*   `xl`: `1280px` (Standard desktop screens)
*   `2xl`: `1536px` (Wide desktops)

---

## 2. Global Shell & Navigation States

### Header Bar (Sticky Nav)
*   **Desktop Layout (`xl` and above)**: Centered grid `grid grid-cols-[1fr_auto_1fr] items-center h-[108px] px-12 bg-black/40 backdrop-blur-md border-b border-white/10`.
    *   *Left Box*: Hamburger button (`size-8 flex items-center justify-center border border-white/10 rounded-md`), dropdown triggers ("VEHICLES", "OWNERSHIP TOOLS", "SARKIN MOTA NETWORK").
    *   *Center Box*: Clickable brand logo (`w-[111px] h-[68px]`).
    *   *Right Box*: Dropdown trigger ("SELL OR SWAP"), flat links ("NEWS", "ABOUT"), vertical divider (`h-12 w-px bg-white/10`), "CONTACT US" button.
*   **Mobile Layout (`sm` to `lg`)**: `flex justify-between items-center h-[80px] px-6`. Displays hamburger button left, logo centered, contact icon right.
*   **Interactive Hover State**: Moving over navigation words slides a gold horizontal bar (`h-px bg-gold`) from left-to-right (`transition-all duration-500 ease-out`).

### Mobile Navigation Drawer
*   **Behavior**: Clicking hamburger triggers a sliding overlay from the left (`fixed left-0 top-0 h-full w-[320px] bg-panel border-r border-gold/20 z-[999] transition-transform duration-500`). Includes backdrop blur overlay (`bg-black/60 backdrop-blur-sm`).
*   **Contents**: Top close button, vertical list of primary routes with chevron dropdowns, User Login button, and direct WhatsApp contact shortcut.

---

## 3. UI Component Configurations

### 1. The Vehicle Card component
*   **Visual Layout**: Vertical container `flex flex-col bg-panel border border-white/5 rounded-md overflow-hidden transition-all duration-300 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10`.
*   **Sub-components**:
    *   *Image Area*: Aspect ratio $16:9$. Displays vehicle crop. Features a top-left status pill badge: `absolute top-3 left-3 px-3 py-1 text-2xs font-bold bg-gold text-black rounded-sm uppercase` (e.g. "TOKUNBO").
    *   *Details Area*: Padding `p-5`. Displays brand/model header (`text-lg font-bold text-white uppercase`), specification row (`text-xs text-muted` - Year | mileage | Gearbox), and price tag (`text-base font-bold text-gold mt-3`).
    *   *Footer Button*: Full-width CTA `w-full py-3 bg-white/5 text-center text-xs uppercase hover:bg-gold hover:text-black transition-colors`.

### 2. Loan Calculator Widget
*   **Visual Layout**: `grid grid-cols-1 md:grid-cols-2 gap-8 bg-panel border border-white/10 rounded-md p-8`.
*   **Left Column (Controls)**: Range sliders for:
    *   *Vehicle Price*: ₦10M to ₦300M.
    *   *Down Payment*: 10% to 90% (calculated value dynamically updated).
    *   *Interest Rate*: 5% to 35%.
    *   *Loan Term*: 12 to 60 months.
*   **Right Column (Output Results)**: Large visual block containing gold monthly payment figure (`text-5xl font-black text-gold font-heading`), total finance cost, total interest. Includes a primary CTA button: "Apply for Financing" (`bg-gold text-black rounded-full py-4 text-center font-bold`).

### 3. Integrated Stepper Form (Sell & Swap wizard)
*   **Visual Layout**: `max-w-2xl mx-auto bg-panel border border-white/10 rounded-md p-8`.
*   **Stepper Navigation Header**: Horizontal progress line displaying four numbered circle indicators (`flex justify-between items-center mb-8 relative`). Complete steps render in gold with checks; active step glows; pending steps remain gray.
*   **Form inputs**: Inputs use a clean glassmorphic baseline (`bg-black border border-white/10 rounded-md px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none`).

---

## 4. Platform Interface States

### 1. System Loading State (Glow Spinner)
*   **Visual Layout**: Overlay covering screen (`fixed inset-0 bg-black z-[9999] flex flex-col justify-center items-center`).
*   **Animations**: Brand logo sits in the middle with a pulsing radial gold backdrop glow (`blur-2xl bg-gold/20 animate-pulse`).

### 2. Empty Catalog State
*   **Visual Layout**: `flex flex-col items-center justify-center py-20 text-center`.
*   **Components**: Centered outline icon of car with diagonal slash, text warning `text-lg text-white font-bold mb-2`, secondary text `text-sm text-muted mb-6`, and button "Ask MyBratha AI Assistant" (`border border-gold text-gold rounded-md px-6 py-2`).

### 3. System Error Layout (404 / 500)
*   **Visual Layout**: `flex flex-col justify-center items-center min-h-[70vh] text-center`.
*   **Components**: Large status numbers `text-9xl font-black tracking-widest text-white/5` with a thin gold text outline, helper label "Page Not Found", and CTA button "Return to Showroom" (`bg-gold text-black rounded-md px-8 py-3`).
