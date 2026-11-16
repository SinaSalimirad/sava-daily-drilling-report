# Build context is the repository root (see docker-compose.yml), because the
# lockfile and workspace config live there.
FROM oven/bun:1.4.4-slim

WORKDIR /app

# Install first so this layer is cached until a package.json or the lockfile changes.
# apps/web/package.json is needed because bun.lock covers the whole workspace.
COPY package.json bun.lock tsconfig.base.json ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
RUN bun install --frozen-lockfile --production --filter api

COPY apps/api apps/api

WORKDIR /app/apps/api
ENV NODE_ENV=production
EXPOSE 3001

# The base image ships an unprivileged "bun" user.
USER bun
CMD ["bun", "src/index.ts"]
