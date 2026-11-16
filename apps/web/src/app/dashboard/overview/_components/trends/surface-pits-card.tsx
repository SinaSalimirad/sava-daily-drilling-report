import { OverviewCard } from "@/app/dashboard/overview/_components/overview-card";
import {
  ROW_HEIGHT,
  RowBarsChart,
} from "@/app/dashboard/overview/_components/row-bars-chart";
import {
  type PitKind,
  surfacePits,
} from "@/app/dashboard/overview/_components/trends/trends-data";

const kindFill: Record<PitKind, string> = {
  active: "var(--series-1)",
  reserve: "var(--series-3)",
  notMud: "var(--viz-other)",
};

const kindDot: Record<PitKind, string> = {
  active: "bg-series-1",
  reserve: "bg-series-3",
  notMud: "bg-viz-other",
};

const { capacity, pits, totals } = surfacePits;

const chartPits = pits.map(({ name, volume, kind }) => ({
  name,
  value: volume,
  display: String(volume),
  fill: kindFill[kind],
}));

export function SurfacePitsCard() {
  return (
    <OverviewCard title="Surface pits" subtitle={`${pits.length} of 20`}>
      <div className="flex gap-4 text-sm">
        <div className="min-w-0 flex-1">
          <RowBarsChart
            rows={chartPits}
            capacity={capacity}
            ariaLabel="Volume in each surface pit"
          />
        </div>
        {/* Same row height as the chart, so each value sits beside its bar. */}
        <ul>
          {pits.map(({ name, volume }) => (
            <li
              key={name}
              className="flex items-center justify-end font-semibold tabular-nums"
              style={{ height: ROW_HEIGHT }}
            >
              {volume}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-wrap gap-x-4 gap-y-1 border-t pt-4 text-xs text-muted-foreground">
        {totals.map(({ kind, label, volume }) => (
          <li key={kind} className="flex items-center gap-1.5">
            <span
              className={`size-2 rounded-full ${kindDot[kind]}`}
              aria-hidden
            />
            {label}{" "}
            <strong className="font-semibold text-foreground">{volume}</strong>
          </li>
        ))}
      </ul>
    </OverviewCard>
  );
}
