import { treaty } from "@elysiajs/eden";
import type { App } from "api";

// Fallback is for local development only; set NEXT_PUBLIC_API_URL in other environments.
const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

// Typed from the API's routes: renaming or changing a route breaks the web typecheck.
export const api = treaty<App>(apiUrl);
