import { OverviewCard } from "@/components/common/overview-card";
import { seriesBg } from "@/app/dashboard/overview/_components/trends/series";
import {
  ShareBarChart,
  type SharePart,
} from "@/app/dashboard/overview/_components/trends/share-bar-chart";
import { activities } from "@/app/dashboard/overview/_components/trends/trends-data";

const hours = (value: number) => `${value.toFixed(1)} h`;

const parts: SharePart[] = activities.parts.map((part) => ({
  label: part.label,
  value: part.hours,
  detail: hours(part.hours),
  fill: `var(--series-${part.series})`,
}));

export function ActivitiesCard() {
  return (
    <OverviewCard title="Activities — 24 h">
      <ShareBarChart parts={parts} label="Activities in the last 24 hours" />

      <ul className="flex flex-col gap-2 text-sm">
        {activities.parts.map((part) => (
          <li key={part.label} className="flex items-center gap-2">
            <span
              className={`size-2 rounded-full ${seriesBg[part.series]}`}
              aria-hidden
            />
            <span>{part.label}</span>
            <strong className="ml-auto font-semibold tabular-nums">
              {hours(part.hours)}
            </strong>
          </li>
        ))}
      </ul>

      <dl className="grid grid-cols-[auto_1fr] gap-y-2 border-t pt-4 text-sm">
        <dt className="text-muted-foreground">Present activity</dt>
        <dd className="text-right font-semibold">{activities.present}</dd>
        <dt className="text-muted-foreground">Total</dt>
        <dd className="text-right font-semibold text-viz-good">
          {activities.total}
        </dd>
      </dl>
    </OverviewCard>
  );
}
