# TEENS — Premium Cap Store

A Next.js + TypeScript starter for the TEENS headwear storefront. The design is intentionally minimal: black, warm white, stone/taupe, Space Grotesk headings and Inter body text.

## Important launch status

**This is a functional development starter, not production-ready.** The current five-product catalogue, prices, stock, product specifications and SVG illustrations are demo placeholders. The eight image filenames mentioned in the brief were not present as readable image files in the provided runtime, so the project includes clearly labelled illustrative SVGs instead of claiming to use the real cap photographs. Replace these with the five supplied product photos and their gallery angles when available.

WhatsApp checkout is implemented as a detailed, prefilled order request to `+91 63529 73897`. Customers must review the message and press Send. A bill can be printed or saved as PDF from the browser. This is **not a tax invoice or payment receipt**; no payment is verified by WhatsApp. Order storage only works after PostgreSQL is configured and products are seeded in the database. The storefront still uses a local demo catalogue and does not yet dynamically read the Prisma database.

The admin route intentionally shows a setup notice rather than exposing customer/order data: secure authentication and server-enforced role permissions have not been implemented. Do not enable production order-taking until the launch checklist below is complete.

## Stack

- Next.js 15 App Router, React 19, TypeScript
- CSS design system with responsive mobile-first layouts
- PostgreSQL + Prisma schema for products, variants, orders, order-item snapshots, users, inventory adjustments and audit logs
- Zod request validation on the order endpoint
- WhatsApp order handoff and browser print-to-PDF bill

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
cp .env.example .env
npm install
npm run dev
```

Open `http://localhost:3000`.

For database-backed order requests:

1. Create a PostgreSQL database.
2. Set `DATABASE_URL` in `.env`.
3. Run `npm run db:generate` and `npm run db:push` (or create reviewed migrations with `npm run db:migrate`).
4. Seed verified product and variant records. The API expects real database product IDs, active variants, verified prices in paise and inventory.
5. Reconcile the checkout product IDs with database product IDs before enabling order persistence. The bundled storefront uses static demo IDs, so the database-backed path requires this integration work.

## Environment variables

See `.env.example`. Keep database credentials, `AUTH_SECRET`, payment secrets and webhook secrets server-side. Never use a `NEXT_PUBLIC_` prefix for secrets.

## Included pages

- `/` home
- `/shop` catalogue search, category and availability filters, sorting
- `/product/[slug]` product detail and cart actions
- `/cart` cart quantity and remove actions
- `/checkout` delivery details, WhatsApp order handoff, order-request bill and print/save as PDF
- `/about`, `/contact`, `/faq`, `/shipping`, `/returns`, `/privacy`, `/terms`
- `/admin` guarded-by-omission setup notice; actual admin login/CRUD not yet implemented
- `POST /api/orders` validated database-backed order request endpoint (requires configured DB and product reconciliation)

## Current limitations / production blockers

- Real cap images, product names, materials, prices, SKUs, variants, stock and accurate descriptions must be supplied and verified.
- No real online payment gateway yet. Razorpay/Cashfree merchant onboarding, credentials, server-side verification, webhook signature checks, idempotency and test-mode flows remain to implement.
- No authenticated customer accounts, password recovery, persistent customer carts/wishlists or protected admin CRUD.
- Database-backed orders require seed data and matching IDs; production concurrency-safe stock reservation and a reviewed fulfilment workflow still need implementation and tests.
- Shipping rates, tax/GST configuration, dispatch and delivery estimates, return/exchange/refund policy, legal business details, privacy disclosures, support process and social links are placeholders.
- No email/SMS order notifications, carrier integration, analytics consent, monitoring, backups or restore test yet.
- Product imagery is illustrative SVG art, not a substitute for accurate product photography.

## QA checklist before launch

- [ ] Replace all demo products, stock, images and prices with verified records.
- [ ] Complete and test database seeding and transaction-safe inventory operations.
- [ ] Implement authentication, server-side role permissions, CSRF/session controls, rate limits and audit logs.
- [ ] Implement real payment provider checkout, verified server-side payments, signed webhooks and duplicate-event protection.
- [ ] Confirm business identity, GST/tax treatment, shipping, returns/refunds, privacy, terms and consumer disclosures with a qualified professional.
- [ ] Configure real shipping rates and customer-support contact.
- [ ] Test success, failure, cancellation, retry, duplicate webhook, stock race, invalid inputs, and unavailable product cases.
- [ ] Test keyboard and screen-reader accessibility, mobile devices, Core Web Vitals, SEO, backups and recovery.
- [ ] Configure production domain, HTTPS, environment variables, monitoring and controlled test orders.

## Build status

Source files and core storefront interactions are scaffolded. No successful production build or end-to-end test is claimed until dependencies are installed and the full test plan has been run in a configured environment.
