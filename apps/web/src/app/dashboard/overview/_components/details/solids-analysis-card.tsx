import { solidsAnalysis } from "@/app/dashboard/overview/_components/details/details-data";
import { OverviewCard } from "@/app/dashboard/overview/_components/overview-card";
import { StatGrid } from "@/app/dashboard/overview/_components/stat-grid";
import { ShareBarChart } from "@/app/dashboard/overview/_components/trends/share-bar-chart";
import { ShareLegend } from "@/app/dashboard/overview/_components/trends/share-legend";

const parts = solidsAnalysis.composition.map(({ label, percent, series }) => ({
  label,
  value: percent,
  detail: `${percent} %`,
  fill: `var(--series-${series})`,
}));

export function SolidsAnalysisCard() {
  return (
    <OverviewCard
      title="Solids analysis"
      subtitle={solidsAnalysis.subtitle}
      version="v0.6"
    >
      <StatGrid stats={solidsAnalysis.stats} />

      <div className="flex flex-col gap-3">
        <h3 className="text-xs tracking-wide text-muted-foreground uppercase">
          Mud composition by volume
        </h3>
        <ShareBarChart parts={parts} label="Mud composition by volume" />
        <ShareLegend parts={parts} />
      </div>

      <p className="border-t pt-4 text-sm text-muted-foreground">
        {solidsAnalysis.note}
      </p>
    </OverviewCard>
  );
}
