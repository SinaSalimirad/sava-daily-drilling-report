import { api } from "@/lib/api-client";

// Server Component: the call happens on the server, so the browser never needs CORS.
export async function ApiStatus() {
  const { data, error } = await api.health.get();

  if (error) {
    return <p className="text-red-600">API unreachable</p>;
  }

  return <p className="text-green-600">API status: {data.data.status}</p>;
}
