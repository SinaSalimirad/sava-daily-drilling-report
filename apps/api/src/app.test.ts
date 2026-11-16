import { describe, expect, it } from "bun:test";
import { app } from "./app";

describe("GET /health", () => {
  it("returns status ok", async () => {
    const response = await app.handle(new Request("http://localhost/health"));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ data: { status: "ok" } });
  });
});
