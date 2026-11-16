import { seriesBg } from "@/app/dashboard/overview/_components/trends/series";
import {
  ShareBarChart,
  type SharePart,
} from "@/app/dashboard/overview/_components/trends/share-bar-chart";
import { TrendCard } from "@/app/dashboard/overview/_components/trends/trend-card";
import { fluidCost } from "@/app/dashboard/overview/_components/trends/trends-data";

const parts: (SharePart & { dot: string })[] = fluidCost.byProduct.map(
  ({ label, share, series }) => ({
    label,
    value: share,
    detail: `${share}%`,
    fill: series ? `var(--series-${series})` : "var(--viz-other)",
    dot: series ? seriesBg[series] : "bg-viz-other",
  }),
);

export function FluidCostCard() {
  return (
    <TrendCard title="Fluid cost" subtitle="USD" version="v0.4">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
        {fluidCost.stats.map(({ label, value, note }) => (
          <div key={label}>
            <dt className="text-xs tracking-wide text-muted-foreground uppercase">
              {label}
            </dt>
            <dd className="text-xl font-semibold">
              {value}
              {note && (
                <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                  {note}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-3">
        <h3 className="text-xs tracking-wide text-muted-foreground uppercase">
          Today's cost by product
        </h3>
        <ShareBarChart parts={parts} label="Today's cost by product" />
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          {parts.map(({ label, detail, dot }) => (
            <li key={label} className="flex items-center gap-1.5">
              <span className={`size-2 rounded-full ${dot}`} aria-hidden />
              {label}{" "}
              <strong className="font-semibold text-foreground">
                {detail}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </TrendCard>
  );
}
