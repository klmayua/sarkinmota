# Stitch Component Inventory Specification (Sarkin Mota 2.0)

This document details the interface components, layout states, and responsive specifications required for front-end development in Stitch.

---

## 1. Core Component Catalog

### 1. General Action Button
*   **Design & Layout**: Rounded border button (`rounded-full px-8 py-3 font-semibold uppercase tracking-wider`).
*   **States**:
    *   *Primary Idle*: Gold background, black text (`bg-gold text-black`).
    *   *Primary Hover*: Scale effect, gold outer shadow (`hover:scale-105 hover:shadow-lg hover:shadow-gold/30 transition-transform`).
    *   *Secondary Idle*: Transparent background, gold border line (`border border-gold text-gold`).
    *   *Disabled*: Gray background, no pointer events (`bg-white/10 text-white/30 cursor-not-allowed`).
*   **Responsive Behavior**: Block width on mobile viewports (`w-full`), inline width on desktop (`w-fit`).

### 2. The Interactive Search Autocomplete Box
*   **Design & Layout**: Input field combined with a floating results box (`relative w-full`).
*   **States**:
    *   *Idle*: Thin border line, gray text (`border border-white/10 text-white/60 bg-black`).
    *   *Focused*: Gold border line highlight (`focus:border-gold outline-none`).
    *   *Searching*: Renders spinning circular loader inside right input bounds.
    *   *Results Active*: Renders dynamic dropdown list containing matched car models thumbnails.
*   **Responsive Behavior**: Adapts to parent header grid containers.

### 3. The Spec Compare Table Grid
*   **Design & Layout**: Clean, border-aligned table mapping comparison properties.
*   **States**:
    *   *Specs Compare*: Columns represent vehicles, rows represent property specifications.
    *   *Differences Highlight*: Rows with differences show gold backgrounds.
    *   *Empty Slot*: Renders "+" placeholder icon linking to catalog search.
*   **Responsive Behavior**: Swaps to horizontal scroll card view on small mobile viewports.

### 4. "MyBratha" Assistant Chat Overlay
*   **Design & Layout**: Floating round trigger icon bottom-right. Clicking expands a chat panel (`w-[380px] h-[520px] bg-panel border border-gold/20 rounded-md shadow-2xl flex flex-col z-[9999]`).
*   **States**:
    *   *Closed*: Small trigger icon pulsing gold border outline.
    *   *Open*: Shows greeting message and suggestions shortcuts.
    *   *Streaming Response*: Displays three-dot typing bubbles.
*   **Responsive Behavior**: Renders full-screen on mobile devices.

### 5. Drag & Drop File Stepper (Multi-Image uploader)
*   **Design & Layout**: Dashed border container box. Includes files checklist.
*   **States**:
    *   *Empty*: Icon displaying "Drag & drop files here or click to upload".
    *   *Hovering Files*: Border dashes change color from white to gold.
    *   *Uploading*: Progress indicator bar updates.
    *   *Complete*: Renders image list thumbnails with delete icons.
*   **Responsive Behavior**: Adapts to flex grid layouts.

---

## 2. Recommended Actions & Business Mapping

### Recommendation 1: Configure Custom Image Component Optimization
*   **Business Objective**: Ensure fast catalog load speeds to keep mobile user engagement high.
*   **Stakeholder Owner**: Head Developer / Super Admin.
*   **Action Plan**: Deploy lazy-loading templates that render low-resolution blur images while high-definition assets are fetched.

### Recommendation 2: Enable Automated Error Overlays for Form Fields
*   **Business Objective**: Ensure clean lead entries and reduce transaction friction for users.
*   **Stakeholder Owner**: Product Designer.
*   **Action Plan**: Add validation helpers below form inputs that display error messages in red/gold outlines if validation rules are failed.
