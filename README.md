# eStuda

eStuda is a Next.js 15 powered learning marketplace experience that showcases featured courses, categories, instructors, and blog content with rich animations and marketing-driven sections. It is built as a modern landing and onboarding surface for an education platform, pairing a Prisma-backed data layer, NextAuth authentication, and Stripe-ready billing hooks.

## Tech Stack

-   Next.js App Router with React 19 and TurboPack dev server
-   Prisma ORM with a PostgreSQL-friendly schema
-   NextAuth for authentication flows
-   Stripe SDK and checkout utilities
-   Styling with SCSS modules, Bootstrap utilities, and custom animations

## Project Setup

1. **Install dependencies** – `npm install`
2. **Prepare environment variables** – copy `.env` to `.env.local` (or create one) and add values for database, NextAuth, and Stripe keys of your deployment.
3. **Run database migrations** – `npx prisma migrate dev` (requires a configured database).
4. **Generate Prisma client** – `npx prisma generate` if you change the schema.

## Run The Project

-   **Start development server** – `npm run dev` and open `http://localhost:3000`
-   **Type-check and lint** – `npm run lint`
-   **Create a production build** – `npm run build`
-   **Serve the build locally** – `npm run start`

## Additional Notes

-   Components live under `src/components` and pages/layouts follow the Next.js App Router conventions inside `src/app`.
-   Animations rely on Framer Motion and GSAP; avoid blocking the main thread to keep transitions smooth.
-   Update Prisma schema and migrations before deploying so API routes and NextAuth adapters stay in sync with your database.

## Demo Read-Only Accounts

-   For a live demo environment you can keep one or more logins read-only by setting `DEMO_READONLY_EMAILS` to a comma‑separated list of account emails (for example `demo.admin@example.com,demo.instructor@example.com`).
-   Mutating server actions and API routes deny create/update/delete requests for those accounts and return a `403` together with a friendly error message.
-   Optionally override the copy with `DEMO_READONLY_MESSAGE="Demo account has read-only access."`.
-   Leave these variables unset (or empty) when packaging for ThemeForest to restore full authoring capabilities.
