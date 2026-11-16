import { DashboardBreadcrumb } from "@/app/dashboard/_components/dashboard-breadcrumb";
import { OverviewToolbar } from "@/app/dashboard/overview/_components/overview-toolbar";

export default function OverviewPage() {
  return (
    <main>
      <div className="flex flex-col gap-3 bg-muted/50 px-10 py-3">
        <DashboardBreadcrumb />
        <OverviewToolbar />
      </div>
    </main>
  );
}
