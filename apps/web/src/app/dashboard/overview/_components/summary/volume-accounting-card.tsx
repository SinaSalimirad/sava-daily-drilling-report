import { CheckIcon } from "lucide-react";
import { OverviewCard } from "@/app/dashboard/overview/_components/overview-card";
import {
  ROW_HEIGHT,
  type RowBar,
  RowBarsChart,
} from "@/app/dashboard/overview/_components/row-bars-chart";
import { volumeAccounting } from "@/app/dashboard/overview/_components/summary/summary-data";

// Bars on the left, printed values on the right, in rows of the same height.
function RowBars({
  rows,
  capacity,
  ariaLabel,
}: {
  rows: RowBar[];
  capacity: number;
  ariaLabel: string;
}) {
  return (
    <div className="flex gap-4 text-sm">
      <div className="min-w-0 flex-1">
        <RowBarsChart rows={rows} capacity={capacity} ariaLabel={ariaLabel} />
      </div>
      <ul>
        {rows.map(({ name, display }) => (
          <li
            key={name}
            className="flex items-center justify-end font-semibold tabular-nums"
            style={{ height: ROW_HEIGHT }}
          >
            {display}
          </li>
        ))}
      </ul>
    </div>
  );
}

const { capacity, movements, end, balance, losses, lossesCapacity } =
  volumeAccounting;

export function VolumeAccountingCard() {
  return (
    <OverviewCard
      title="Volume accounting — today"
      subtitle="barrels"
      version="v0.5"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <RowBars
            rows={movements}
            capacity={capacity}
            ariaLabel="Volume movements today"
          />
          <div className="border-t pt-3">
            <RowBars rows={[end]} capacity={capacity} ariaLabel="End volume" />
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-950 dark:border-green-900 dark:bg-green-950 dark:text-green-50">
            <p className="flex items-center gap-1.5 font-semibold text-viz-good">
              <CheckIcon className="size-4" aria-hidden />
              {balance.title}
            </p>
            <p className="mt-1">
              {balance.detail}{" "}
              <strong className="font-semibold">{balance.difference}</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs tracking-wide text-muted-foreground uppercase">
            {volumeAccounting.lossesTitle}
          </h3>
          <RowBars
            rows={losses}
            capacity={lossesCapacity}
            ariaLabel="Where the lost volume went"
          />
          <p className="text-xs text-muted-foreground">
            {volumeAccounting.lossesNote}
          </p>
        </div>
      </div>
    </OverviewCard>
  );
}
