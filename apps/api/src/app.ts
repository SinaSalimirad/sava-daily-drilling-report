import { Elysia } from "elysia";

// App is built separately from the server start so tests can call it without opening a port.
export const app = new Elysia().get("/health", () => ({
  data: { status: "ok" },
}));
