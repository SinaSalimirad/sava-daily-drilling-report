import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { env } from "./config/env";
import { projectRoutes } from "./modules/projects/project.routes";

// App is built separately from the server start so tests can call it without opening a port.
export const app = new Elysia()
  // The web app runs only in the browser, so it calls the API cross-origin.
  .use(cors({ origin: env.WEB_ORIGIN }))
  // Validation errors already have a clean, typed shape (Elysia's default
  // response) — only an unexpected error (a DB outage, a bug) needs catching,
  // so its message and stack never reach the client.
  .onError(({ code, error, request }) => {
    if (code === "VALIDATION") return;
    console.error(`Unhandled error on ${request.method} ${request.url}`, error);
    return Response.json(
      { code: "INTERNAL_ERROR", message: "Something went wrong." },
      { status: 500 },
    );
  })
  .get("/health", () => ({
    data: { status: "ok" },
  }))
  .use(projectRoutes);

// The web app imports only this type (never the runtime code) so Eden can infer every route.
export type App = typeof app;
