# YG Unisex Salon — Premium Next.js starter

A responsive, editorial-style salon website using Next.js App Router, TypeScript, Tailwind CSS v4 and Lucide icons. The provided YG logo has been recreated as a simple SVG interpretation of the uploaded gold botanical mark; replace `public/yg-logo.svg` with the original approved logo file for brand fidelity.

## Run locally
1. Install Node.js 20.9 or newer.
2. Extract this ZIP and open the project directory.
3. Run `npm install`
4. Run `npm run dev`
5. Open http://localhost:3000

Quality checks: `npm run typecheck`, `npm run lint`, `npm run build`.

## Included routes
`/`, `/services`, `/about`, `/gallery`, `/contact`, `/book`, `/shop`, `/privacy`, `/terms`, `/admin`.

## Demo features
- Responsive premium ivory, beige, espresso and champagne design.
- Mobile navigation and floating auto-reply FAQ chatbot.
- Service menu with quote-based services and preselected booking links.
- Multi-step appointment/quotation request form with basic client-side validation.
- Demo reference stored in browser session only.
- Sample product catalogue and in-memory demo shopping bag.
- Contact form UI, gallery, admin preview and policy pages.

## Must be configured before real business use
- Replace all demo prices, images, products, stylist content, contact details, hours, address, testimonials and policy text with verified salon information.
- Booking is not persistent, does not check live availability, and does not notify staff. Connect a server-side database (e.g. Supabase/PostgreSQL), server validation, transactional double-booking protection and email/WhatsApp notifications.
- The chatbot uses local keyword-based replies. For AI-powered responses, create a server-side route and configure a provider API key; never expose secrets in client code.
- Shop/cart is a UI demo only. Add inventory/order persistence, tax/shipping calculations, payment gateway, refunds and fulfilment before selling products.
- `/admin` is an unprotected visual preview. Add authentication, server-side authorization, audit logs and restricted database access before deployment.
- Configure canonical URL, real LocalBusiness structured data, sitemap/robots, privacy/terms and spam protection before launch.
- Images use remote Unsplash URLs for visual demonstration; confirm licensing and availability or replace with salon-owned assets.

## Honest test status
Source archive was created in this session. Dependency installation and production build have not been run here; execute the quality-check commands locally and fix any environment-specific issues before deployment. No live bookings or payments are processed by this demo.
