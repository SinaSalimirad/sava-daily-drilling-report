import { CurrentPage } from "@/app/dashboard/_components/current-page";
import { DashboardBreadcrumb } from "@/app/dashboard/_components/dashboard-breadcrumb";
import { ProjectsTableCard } from "@/app/dashboard/master-data/projects/_components/projects-table-card";

// Master Data / Projects. The page title and breadcrumb come from the nav item "Projects".
export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 px-10 py-3">
      <DashboardBreadcrumb />
      <CurrentPage />
      <ProjectsTableCard />
    </main>
  );
}
