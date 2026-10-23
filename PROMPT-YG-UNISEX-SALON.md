# MASTER PROMPT — YG UNISEX SALON | Premium Beauty, Booking, Quotes & Shop

Act as a luxury brand creative director, award-winning UI/UX designer, senior Next.js engineer, conversion specialist and accessibility-minded motion designer.

Build a complete, production-oriented website for **YG Unisex Salon**, using the supplied gold botanical YG Unisex Salon logo as the brand identity. The look must be completely distinct from generic salon templates: high-end editorial art direction, warm ivory and limestone, muted champagne gold, espresso typography, generous negative space, asymmetrical image compositions, refined micro-interactions and cinematic salon/beauty imagery. Gold is an accent, not a loud gradient. Make it feel premium, welcoming and gender-inclusive.

## Tech
Next.js App Router, TypeScript strict mode, Tailwind CSS, Framer Motion, Lucide React, accessible reusable components, Zod validation, and Supabase/PostgreSQL for real persistence. Keep secrets server-side and separate client/server code.

## Brand & design
- Brand name: YG Unisex Salon; use supplied logo, preserve its gold botanical symbol.
- Responsive layout from 320px mobile through ultrawide desktop, no horizontal overflow.
- Elegant serif display typography paired with modern sans-serif.
- Sticky translucent header, animated mobile drawer, visible focus states and reduced-motion support.
- Premium photography with optimized image loading, accessible alt text, soft borders and purposeful transitions.
- Use the same design system on every page; avoid template-like repeated blocks.

## Required pages
Home, Services, individual service details, Artists, Gallery, About, Shop/product detail, Book/Get a Quote, request confirmation, Contact, Privacy, Terms, Cancellation Policy, and protected Admin.

## Services & quote engine
Offer haircuts/styling, colour and treatments, skin/facials, bridal and occasion makeup, nails/manicure, men's grooming and any extra services configured by the owner. Prices, durations, descriptions, staff eligibility and quote-only flags must live in one central database/data model. Some services must be explicitly quotation-based. Quote requests collect service, event/date, desired look, optional inspiration upload, customer details and notes. Clearly show quote status (received, reviewing, quote sent, accepted/declined) in authenticated admin. Never invent a final price or mark a quote confirmed until the server saves it.

## Appointment booking
A polished five-step flow: service, preferred artist/any available, date/time, customer details, review/submit. Use timezone-aware dates, server-side validation, live availability query, database transactions/constraints against double booking, idempotency or duplicate-submission protection, unique reference, confirmation only after successful database write, retryable error states, calendar event download and email/WhatsApp notifications through configured services. Never pretend a demo or failed write is a confirmed booking.

## E-commerce
Product catalogue with categories, product details, variants where relevant, stock, search/filter, cart, quantity controls, order summary, delivery/pickup rules, taxes, payment gateway, order status and admin inventory. Use a trusted payment provider and verify payment webhooks server-side. Never store card data. In demo mode, clearly state that no payment/order was created.

## Auto-reply chatbot
Floating accessible chatbot with welcome prompt, quick actions for services, quote, booking, products, timings and contact. Use deterministic FAQ answers as fallback and optionally connect an AI provider via a server-side route. Add input validation, rate limiting, safe output handling, clear human handoff to configured phone/WhatsApp/email, and never invent live availability or prices. Store no sensitive conversations without disclosure and consent.

## Admin
Secure authentication, server-enforced roles, dashboard, appointment calendar, search/filter, approve/cancel/reschedule, quote pipeline, services/pricing, artists, products/stock/orders, offers, business hours, blocked slots, contact settings and basic analytics. Do not rely on hiding buttons for security. Protect customer data and secrets.

## SEO/accessibility/performance
Metadata per route, canonical URL, Open Graph, sitemap, robots, accurate LocalBusiness schema only when real details are supplied, semantic HTML, keyboard navigation, labelled forms, WCAG-conscious contrast, reduced motion, responsive images, loading/error/empty states and Core Web Vitals measurement. No fake reviews, false scarcity, invented credentials or unsupported claims.

## Deliverables and QA
Provide runnable source, README, `.env.example`, migrations, demo seed data, deployment guide and basic tests. Run install, typecheck, lint, production build, route/CTA tests, booking invalid-data/unavailable-slot tests, responsive checks and admin authorization checks. Report honestly what passed and what still requires external credentials. Use clearly labelled demo data until the salon owner supplies verified prices, hours, location, policies, artist bios and product inventory.
