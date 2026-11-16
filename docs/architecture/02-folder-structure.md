# Folder structure

Items marked **(planned)** do not exist yet.

```
.
├── apps/
│   ├── api/                      Elysia API
│   │   ├── Dockerfile            API image (build context is the repo root)
│   │   ├── drizzle.config.ts     drizzle-kit config (reads DATABASE_URL via env)
│   │   └── src/
│   │       ├── index.ts          Starts the server
│   │       ├── app.ts            Builds the Elysia app (no listen, so tests can use it)
│   │       ├── config/
│   │       │   └── env.ts        zod-validated environment variables
│   │       └── db/               (planned)
│   │           ├── schema/       Drizzle table definitions, exported from index.ts
│   │           └── migrations/   Generated SQL, committed
│   └── web/                      Next.js frontend
│       ├── Dockerfile            Web image (build context is the repo root)
│       ├── public/               Static assets
│       └── src/
│           ├── app/              App Router: layout, pages, global styles
│           │   ├── globals.css   Tailwind, shadcn tokens and the chart color tokens
│           │   └── dashboard/    One route folder per section
│           │       ├── layout.tsx        Header and main nav shared by every dashboard page
│           │       ├── page.tsx          Redirects to /dashboard/overview
│           │       ├── _components/      Used only inside /dashboard (header, main nav,
│           │       │                     nav sections, breadcrumb, project switcher)
│           │       └── overview/
│           │           ├── page.tsx
│           │           └── _components/  Used only by the Overview page
│           │               ├── overview-toolbar.tsx, report-info-bar.tsx
│           │               ├── overview-card.tsx, stat-grid.tsx, status-badge.tsx
│           │               ├── row-bars-chart.tsx        Shared bar rows (pits, volumes)
│           │               ├── summary/   KPI tiles, volume accounting, submit checks
│           │               ├── trends/    Six trend cards and their charts
│           │               └── details/   Hydraulics, solids analysis, recent reports
│           ├── components/
│           │   ├── ui/           shadcn and Animate UI primitives (button, dropdown-menu, toast)
│           │   └── common/       Components shared by several routes (logo, select-pill, api-status)
│           └── lib/              api-client.ts: typed Eden client for the API
├── docs/
│   ├── architecture/             This folder: overview, structure, git workflow, CI
│   ├── adr/                      Architecture decision records
│   ├── images/                   Diagrams and screenshots
│   ├── roadmap/                  Plans
│   └── security/                 Security notes
├── infra/
│   └── nginx/                    Nginx config (planned)
├── .github/
│   ├── workflows/                ci.yml and security.yml (see 04-ci-pipeline.md)
│   └── dependabot.yml            Weekly dependency update pull requests
├── .claude/skills/               Project skills for Claude Code
├── biome.json                    Shared lint and format config
├── tsconfig.base.json            Shared TypeScript options
├── .dockerignore                 Files kept out of Docker build contexts
├── docker-compose.yml            Local stack: PostgreSQL, API and web
├── docker-compose.prod.yml       Production services (planned, empty)
└── claude.md                     Project rules for Claude Code
```

## Rules

- **Apps do not import runtime code from each other.** The one exception is a type: web imports the `App` type from api so the Eden client is typed. Other shared code goes in a shared workspace package **(planned)**, for example `packages/contracts` with zod schemas.
- **One root config.** Biome and the base tsconfig live at the root. Each app's `tsconfig.json` extends `tsconfig.base.json`.
- **Scripts run from the root.** `bun run lint`, `bun run typecheck`, `bun run dev` and `bun run build` run for every app.
- **Planned API layout.** Each feature gets a folder in `apps/api/src/<feature>/` with its routes, service and repository. Pure business calculations go in their own small module, not inside routes.
- **Web components live next to where they are used.** A component used by one route goes in that route's `_components/` folder (the underscore keeps the folder out of the URL). Move it to `components/common/` only when a second route needs it. `components/ui/` is for generic primitives with no app knowledge.
- **Sub pages follow the nav.** A nav item such as "Well summary" lives at `/dashboard/well-summary`, because the page title and breadcrumb are found by matching the URL segment against the item names in `_components/nav-sections.ts`.
- **Charts use TanStack Charts.** Import from `@tanstack/charts` and its `/react`, `/scales/*` and `/tooltip` subpaths, not from the older `@tanstack/react-charts` package. A chart is a small client component that builds its definition with `useMemo`, so the data it gets must be a stable reference. Every chart sets `ariaLabel`; the library provides the tooltip and keyboard focus.
- **Chart colors are tokens.** `globals.css` defines `--series-1` to `--series-7` (a fixed order, validated for color-blind safety) plus `--viz-other`, `--viz-grid`, `--viz-good` and `--viz-bad`, each with a dark value. A series keeps its slot, so filtering never repaints the survivors. Charts pass these as `var(--series-N)`; text never takes a series color.
- **Placeholder data has one home per section.** Until the API exists, each section keeps its numbers in one `*-data.ts` file (`summary-data.ts`, `trends-data.ts`, `details-data.ts`), marked as placeholder. Totals, shares and check results are meant to come from the backend, so replacing a file with a fetch must not require changing the components.
- **Cards must be able to shrink.** Wide tables sit in an `overflow-x-auto` wrapper, and the card frame (`OverviewCard`) has `min-w-0`, so a wide table scrolls inside its card instead of stretching the page.
- **Environment files.** `.env` is git-ignored and `.env.example` documents the variables. Each app has its own pair inside its folder.
- **Migrations.** SQL files in `apps/api/src/db/migrations` are generated by drizzle-kit and committed. Never edit one that is already on `main`.
