import { DashboardBreadcrumb } from "@/app/dashboard/_components/dashboard-breadcrumb";
import { NewProjectForm } from "@/app/dashboard/master-data/projects/new/_components/new-project-form";
import { NewProjectHeader } from "@/app/dashboard/master-data/projects/new/_components/new-project-header";

// Master Data / Projects / New project. The breadcrumb takes "Master Data / Projects"
// from the URL and the leaf from here, the same way the archive page does.
export default function NewProjectPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 px-10 py-3">
      <DashboardBreadcrumb leaf="New project" />
      <NewProjectHeader />
      <NewProjectForm />
    </main>
  );
}
