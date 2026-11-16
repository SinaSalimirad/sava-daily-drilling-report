import { CheckIcon, TriangleAlertIcon } from "lucide-react";
import { KpiTile } from "@/app/dashboard/overview/_components/summary/kpi-tile";
import { MiniBarChart } from "@/app/dashboard/overview/_components/summary/mini-bar-chart";
import { kpis } from "@/app/dashboard/overview/_components/summary/summary-data";
import { ShareBarChart } from "@/app/dashboard/overview/_components/trends/share-bar-chart";
import { ShareLegend } from "@/app/dashboard/overview/_components/trends/share-legend";
import { metresDrilled } from "@/app/dashboard/overview/_components/trends/trends-data";

const mudParts = kpis.mudInSystem.parts.map(({ label, volume, series }) => ({
  label,
  value: volume,
  detail: volume.toLocaleString("en-US"),
  fill: `var(--series-${series})`,
}));

const strong = "font-semibold text-foreground";

export function KpiRow() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <KpiTile
        label="Total depth"
        value={kpis.totalDepth.value}
        unit={kpis.totalDepth.unit}
        visual={
          <MiniBarChart
            bars={metresDrilled.reports}
            axisMax={metresDrilled.axisMax}
            label="Metres drilled in the last reports"
          />
        }
        footer={
          <>
            <strong className="font-semibold text-viz-good">
              {kpis.totalDepth.drilledToday}
            </strong>{" "}
            drilled today · bit at {kpis.totalDepth.value} m
          </>
        }
      />

      <KpiTile
        label="Mud weight"
        version="v0.6"
        value={kpis.mudWeight.value}
        unit={kpis.mudWeight.unit}
        footer={
          <span className="flex items-center gap-1.5">
            <TriangleAlertIcon
              className="size-3.5 text-status-warning"
              aria-hidden
            />
            <strong className={strong}>{kpis.mudWeight.delta}</strong>
            {kpis.mudWeight.note}
          </span>
        }
      />

      <KpiTile
        label="Volume balance"
        version="v0.5"
        value={kpis.volumeBalance.status}
        valueClassName="text-viz-good"
        footer={
          <span className="flex items-center gap-1.5">
            <CheckIcon className="size-3.5 text-viz-good" aria-hidden />
            <strong className="font-semibold text-viz-good">
              {kpis.volumeBalance.difference}
            </strong>
            {kpis.volumeBalance.note}
          </span>
        }
      />

      <KpiTile
        label="Mud in system"
        value={kpis.mudInSystem.value}
        unit={kpis.mudInSystem.unit}
        visual={
          <ShareBarChart parts={mudParts} label="Mud in system" height={8} />
        }
        footer={<ShareLegend parts={mudParts} />}
      />

      <KpiTile
        label="Daily fluid cost"
        version="v0.4"
        value={kpis.dailyFluidCost.value}
        footer={
          <>
            Section{" "}
            <strong className={strong}>
              {kpis.dailyFluidCost.note.section}
            </strong>{" "}
            · cumulative{" "}
            <strong className={strong}>
              {kpis.dailyFluidCost.note.cumulative}
            </strong>
          </>
        }
      />

      <KpiTile
        label="Hole cleaning index"
        version="v0.7"
        value={kpis.holeCleaning.value}
        unit={kpis.holeCleaning.verdict}
        unitClassName="font-semibold text-viz-good"
        footer={kpis.holeCleaning.note}
      />
    </div>
  );
}
