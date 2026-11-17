import { redirect } from "next/navigation";

// /dashboard/master-data has no content of its own: Projects is its first page.
export default function MasterDataPage() {
  redirect("/dashboard/master-data/projects");
}
