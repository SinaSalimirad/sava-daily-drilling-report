import { HydraulicsCard } from "@/app/dashboard/overview/_components/details/hydraulics-card";
import { RecentReportsCard } from "@/app/dashboard/overview/_components/details/recent-reports-card";
import { SolidsAnalysisCard } from "@/app/dashboard/overview/_components/details/solids-analysis-card";

export function DetailsSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <HydraulicsCard />
      <SolidsAnalysisCard />
      <div className="lg:col-span-2">
        <RecentReportsCard />
      </div>
    </div>
  );
}
