# Build context is the repository root (see docker-compose.yml).
FROM oven/bun:1.4.4-slim AS build

WORKDIR /app

COPY package.json bun.lock tsconfig.base.json ./
COPY apps/web/package.json apps/web/package.json
COPY apps/api/package.json apps/api/package.json
RUN bun install --frozen-lockfile

COPY apps/web apps/web
# The web app imports the API's types (Eden), so its source is needed to build.
COPY apps/api apps/api

# NEXT_PUBLIC_* values are inlined into the browser bundle at build time,
# so the API address the browser uses must be passed here, not at runtime.
ARG NEXT_PUBLIC_API_URL=http://localhost:3001
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN bun run --filter web build

FROM node:24-bookworm-slim AS runtime

WORKDIR /app
ENV NODE_ENV=production \
    HOSTNAME=0.0.0.0 \
    PORT=3000

# Standalone output keeps the monorepo layout: the server is at apps/web/server.js.
COPY --from=build --chown=node:node /app/apps/web/.next/standalone ./
COPY --from=build --chown=node:node /app/apps/web/.next/static apps/web/.next/static
COPY --from=build --chown=node:node /app/apps/web/public apps/web/public

USER node
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
