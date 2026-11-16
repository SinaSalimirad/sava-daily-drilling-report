import {
  PIT_ROW_HEIGHT,
  PitBarsChart,
} from "@/app/dashboard/overview/_components/trends/pit-bars-chart";
import { TrendCard } from "@/app/dashboard/overview/_components/trends/trend-card";
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
  volume,
  fill: kindFill[kind],
}));

export function SurfacePitsCard() {
  return (
    <TrendCard title="Surface pits" subtitle={`${pits.length} of 20`}>
      <div className="flex gap-4 text-sm">
        <div className="min-w-0 flex-1">
          <PitBarsChart pits={chartPits} capacity={capacity} />
        </div>
        {/* Same row height as the chart, so each value sits beside its bar. */}
        <ul>
          {pits.map(({ name, volume }) => (
            <li
              key={name}
              className="flex items-center justify-end font-semibold tabular-nums"
              style={{ height: PIT_ROW_HEIGHT }}
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
    </TrendCard>
  );
}
