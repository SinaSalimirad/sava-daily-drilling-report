"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api-client";

type Status = "loading" | "ok" | "unreachable";

// Runs in the browser: the web app has no server side, so the API must allow this origin (CORS).
export function ApiStatus() {
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    api.health
      .get()
      .then(({ error }) => setStatus(error ? "unreachable" : "ok"))
      .catch(() => setStatus("unreachable"));
  }, []);

  if (status === "loading") {
    return <p>Checking API...</p>;
  }

  if (status === "unreachable") {
    return <p className="text-red-600">API unreachable</p>;
  }

  return <p className="text-green-600">API status: ok</p>;
}
