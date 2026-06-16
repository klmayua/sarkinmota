# Stitch Design System Specification (Sarkin Mota 2.0)

This specification defines the visual styling tokens, spacing systems, typography layout components, and accessibility guidelines for the Sarkin Mota 2.0 interface.

---

## 1. Design Token System

### Core Palette (Hex & HSL Values)
*   **Colors**:
    *   `bg-canvas` (Deep background canvas): HSL `0 0% 0%` / `#000000`
    *   `bg-panel` (Secondary panels): HSL `0 0% 5%` / `#0D0D0D`
    *   `border-gold` (Primary gold accent): HSL `36 53% 53%` / `#C69247`
    *   `border-gold-glow` (Active highlights): HSL `40 76% 64%` / `#E6B860`
    *   `text-primary` (Titles & values): HSL `0 0% 100%` / `#FFFFFF`
    *   `text-muted` (Descriptions): HSL `0 0% 60%` / `#999999`
    *   `text-gold` (Key highlights): HSL `36 53% 53%` / `#C69247`

### Spacing Tokens (Padding & Margin System)
The layout uses a modular base 4px system to maintain consistency:
*   `space-xs`: `4px` (`0.25rem`)
*   `space-sm`: `8px` (`0.5rem`)
*   `space-md`: `16px` (`1rem`)
*   `space-lg`: `24px` (`1.5rem`)
*   `space-xl`: `32px` (`2rem`)
*   `space-2xl`: `48px` (`3rem`)
*   `space-3xl`: `64px` (`4rem`)

### Typography Scaler System
*   **Font-families**: Headings load *Titillium Web* (tracking-wide, uppercase). Body elements load *Inter*.
*   **Sizing**:
    *   `text-2xs`: `0.625rem` (`10px`) - Status labels, badges.
    *   `text-xs`: `0.75rem` (`12px`) - Small metadata description logs.
    *   `text-sm`: `0.875rem` (`14px`) - Body copy.
    *   `text-base`: `1rem` (`16px`) - Primary values, button labels.
    *   `text-lg`: `1.125rem` (`18px`) - Card titles, checklist headers.
    *   `text-xl`: `1.25rem` (`20px`) - Content subtitles.
    *   `text-2xl`: `1.5rem` (`24px`) - Section headings.
    *   `text-5xl`: `3rem` (`48px`) - Sub-hero titles, pricing highlights.
    *   `text-7xl`: `4.5rem` (`72px`) - Hero banner headings.

---

## 2. Structural Layout Grids & Breakpoints

*   **Responsive Breakpoints**:
    *   `sm`: `640px` (Mobile landscape layout).
    *   `md`: `768px` (Tablets / split screen lists).
    *   `lg`: `1024px` (Laptops / 2-column sidebar interfaces).
    *   `xl`: `1280px` (Standard desktop viewports).
    *   `2xl`: `1536px` (Wide desktops).
*   **Page Content Grid Limits**: Main layouts utilize a centered content width (`max-w-7xl mx-auto px-6 py-12`).

---

## 3. Recommended Actions & Business Mapping

### Recommendation 1: Implement Web Accessibility Contrast Standards
*   **Business Objective**: Ensure readability for all users and comply with global web standards.
*   **Stakeholder Owner**: Product Designer / Super Admin.
*   **Action Plan**: Verify that all gold/white text overlays on black backgrounds maintain a minimum contrast ratio of $4.5:1$ (WCAG AA).

### Recommendation 2: Enable Automated Font Preloading Configurations
*   **Business Objective**: Eliminate layout shift (CLS) during page hydration to improve page speeds.
*   **Stakeholder Owner**: Head Developer / Performance Engineer.
*   **Action Plan**: Configure next/font preloading to load the subset Titillium Web and Inter font files as local static assets.
