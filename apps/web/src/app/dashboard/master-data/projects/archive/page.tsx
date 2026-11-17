import { DashboardBreadcrumb } from "@/app/dashboard/_components/dashboard-breadcrumb";
import { ArchivedProjectsHeader } from "@/app/dashboard/master-data/projects/archive/_components/archived-projects-header";
import { ArchivedProjectsTableCard } from "@/app/dashboard/master-data/projects/archive/_components/archived-projects-table-card";

// Master Data / Projects / Archive. The breadcrumb takes "Master Data / Projects" from
// the URL and the leaf from here.
export default function ArchivedProjectsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 px-10 py-3">
      <DashboardBreadcrumb leaf="Archive" />
      <ArchivedProjectsHeader />
      <ArchivedProjectsTableCard />
    </main>
  );
}
