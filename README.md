# SHUBHIII — Creator Learning Studio

Responsive online course platform focused on YouTube strategy and original-content workflows.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS 4 with small readable custom CSS utilities
- PostgreSQL + Prisma
- bcryptjs password hashing; jose signed HTTP-only session cookie
- Stripe Checkout (test mode)

## Run locally
1. Install Node.js 20.9 or newer.
2. Copy `.env.example` to `.env` and fill in `DATABASE_URL`, `AUTH_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` and `NEXT_PUBLIC_SITE_URL`.
3. Run `npm install`.
4. Run `npx prisma generate`.
5. Run `npx prisma db push` to create tables.
6. Run `npm run dev`, then visit http://localhost:3000.

## Stripe test setup
Create test API keys at https://dashboard.stripe.com/test/apikeys. Put the secret key in `STRIPE_SECRET_KEY`. Configure a webhook endpoint at `https://YOUR_DOMAIN/api/stripe/webhook` for the `checkout.session.completed` event and set its signing secret as `STRIPE_WEBHOOK_SECRET`. For local webhook testing use Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe/webhook`.

Stripe's standard test card: `4242 4242 4242 4242`; any future expiry, any CVC and a test postal code. Never enter real card details in test mode.

## Vercel deployment
Import this repository into Vercel. Add the required variables from `.env.example` in Project Settings → Environment Variables. Use a hosted PostgreSQL provider such as Neon; run `npx prisma db push` against that database, then redeploy. Set `NEXT_PUBLIC_SITE_URL` to your deployed HTTPS URL and add the Stripe webhook endpoint in Stripe Dashboard.

## Edit courses
Edit `data/courses.ts`. Prices are in INR. Replace sample YouTube video IDs with videos you own or have permission to embed.

## Before launch
- Replace the sample course video IDs in `data/courses.ts` with authorized course lessons.
- Set `showTestimonials` to `true` only after replacing sample data with genuine, permission-approved reviews.
- Complete the TODO business and instructor details in `config/site.ts`.
- Replace the legal TODOs in `/privacy`, `/terms` and `/refund` with reviewed, accurate policies.
- Configure transactional email for verification, password reset and support replies (not included yet).
- Add rate limiting, abuse monitoring and a production security review.
- Confirm Stripe supports your business location and selected currency.
- Switch to live Stripe keys only after end-to-end testing.

## Important
The course platform is educational and does not promise channel views, subscribers or income. Students should use original or properly licensed media and follow YouTube policies.