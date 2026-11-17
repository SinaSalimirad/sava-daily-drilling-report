# sava-daily-drilling-report

A web application for recording and reviewing daily drilling reports.

Bun workspaces monorepo: `apps/api` (Elysia, Drizzle, PostgreSQL) and `apps/web` (Next.js).

## Quick start

Requires [Bun](https://bun.sh) (the version in `package.json`) and Docker.

```bash
bun install
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
docker compose up -d postgres
bun run dev            # api on :3001, web on :3000
```

The dashboard is at <http://localhost:3000/dashboard>.

## Commands

| Command                             | What it does                                   |
| ----------------------------------- | ---------------------------------------------- |
| `bun run dev`                       | Starts the API and the web app                 |
| `bun run lint` / `bun run format`   | Checks / fixes lint and formatting with Biome  |
| `bun run typecheck`                 | Type-checks every app                          |
| `bun test`                          | Runs the tests                                 |
| `bun run build`                     | Builds every app                               |
| `bun run db:generate` (in `apps/api`) | Generates a SQL migration from the schema    |
| `bun run db:migrate` (in `apps/api`)  | Applies the committed migrations             |

## Documentation

- [Architecture overview](docs/architecture/01-overview.md)
- [Folder structure](docs/architecture/02-folder-structure.md)
- [Git workflow](docs/architecture/03-git-workflow.md)
- [CI pipeline](docs/architecture/04-ci-pipeline.md)
