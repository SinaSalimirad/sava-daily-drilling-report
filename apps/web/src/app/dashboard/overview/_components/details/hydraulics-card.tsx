import { hydraulics } from "@/app/dashboard/overview/_components/details/details-data";
import { StatGrid } from "@/app/dashboard/overview/_components/stat-grid";
import { ShareBarChart } from "@/app/dashboard/overview/_components/trends/share-bar-chart";
import { ShareLegend } from "@/app/dashboard/overview/_components/trends/share-legend";
import { OverviewCard } from "@/components/common/overview-card";

const parts = hydraulics.losses.map(({ label, psi, series }) => ({
  label,
  value: psi,
  detail: psi.toLocaleString("en-US"),
  fill: `var(--series-${series})`,
}));

export function HydraulicsCard() {
  return (
    <OverviewCard
      title="Hydraulics"
      subtitle={hydraulics.subtitle}
      version="v0.7"
    >
      <StatGrid stats={hydraulics.stats} />

      <div className="flex flex-col gap-3">
        <h3 className="text-xs tracking-wide text-muted-foreground uppercase">
          Pressure loss by segment · {hydraulics.lossTotal}
        </h3>
        <ShareBarChart parts={parts} label="Pressure loss by segment" />
        <ShareLegend parts={parts} />
      </div>

      <p className="border-t pt-4 text-sm text-muted-foreground">
        {hydraulics.note}
      </p>
    </OverviewCard>
  );
}
