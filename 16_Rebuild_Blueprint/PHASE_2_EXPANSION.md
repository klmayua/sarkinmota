# Phase 2: Platform Expansion Specification (Sarkin Mota 2.0)

This specification defines the objectives, features, social mechanics, and database structures required for the Phase 2 launch of Sarkin Mota 2.0.

---

## 1. Core Objectives & Scope

Phase 2 focuses on building **brand affinity, community, and engagement** by launching the Car Owner Circle social network, the Autofest events portal, and daily gamification challenges.

### Features Included:
1.  **Car Owner Circle (Community)**:
    *   Unified activity feed (`/circle`) for member posts, comments, reactions, and follows.
    *   Member profile garage cards showing owned cars and badges.
    *   Supercar clubs and state-level regional groups.
2.  **Autofest & Event Management**:
    *   Unified events directory (`/events`).
    *   Online ticket sales with Paystack payment checkouts.
    *   QR code ticket generation and mobile gate check-in verification scans.
3.  **Gamification Engine**:
    *   Daily trivia challenges (Know Your Car, Guess the Engine) on `/challenges`.
    *   Experience point (XP) leaderboards and achievements badge trophy cases.
4.  **Tiered Membership System**:
    *   Premium tier subscriptions to unlock exclusive supercars club forums and track days entry booking.

---

## 2. Technical Architecture (Phase 2)

*   **Stack Extensions**: Socket.io integrations (for live chat and post updates), Paystack API webhooks, and QR code layout generators.
*   **Database Tables Deployed**: `members`, `groups`, `posts`, `comments`, `reactions`, `follows`, `badges`, `member_achievements`, `events`, `registrations`, `tickets`, `sponsors`, `exhibitors`.

---

## 3. Recommended Actions & Business Mapping

### Recommendation 1: Launch Autofest VIP Sponsor Packages
*   **Business Objective**: Secure sponsorship funding before event launch to cover operations costs and drive revenue.
*   **Stakeholder Owner**: Event Organizer / Super Admin.
*   **Action Plan**: Build sponsor slot managers inside the event dashboard, and target pitches to premium banking, real estate, and lifestyle brands.

### Recommendation 2: Set Up Daily Engagement Push Notifications
*   **Business Objective**: Drive user retention and keep community discussions active.
*   **Stakeholder Owner**: Product Manager / Community Moderator.
*   **Action Plan**: Schedule daily automated push notifications alert notifications to active users highlighting high-score trivia leaders.
