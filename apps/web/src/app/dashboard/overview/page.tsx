import { DashboardBreadcrumb } from "@/app/dashboard/_components/dashboard-breadcrumb";
import { OverviewToolbar } from "@/app/dashboard/overview/_components/overview-toolbar";
import { ReportInfoBar } from "@/app/dashboard/overview/_components/report-info-bar";

export default function OverviewPage() {
  return (
    <main>
      <div className="flex flex-col gap-3 bg-muted/50 px-10 py-3">
        <DashboardBreadcrumb />
        <OverviewToolbar />
        <ReportInfoBar />
      </div>
    </main>
  );
}
