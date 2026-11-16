import { redirect } from "next/navigation";

// /dashboard has no content of its own: Overview is its default page.
export default function DashboardPage() {
  redirect("/dashboard/overview");
}
