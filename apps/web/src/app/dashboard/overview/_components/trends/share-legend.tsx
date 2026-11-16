import type { SharePart } from "@/app/dashboard/overview/_components/trends/share-bar-chart";

// Names the parts of a ShareBarChart, in the same order as the bar.
export function ShareLegend({ parts }: { parts: SharePart[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
      {parts.map(({ label, detail, fill }) => (
        <li key={label} className="flex items-center gap-1.5">
          <span
            aria-hidden
            className="size-2 rounded-full"
            style={{ backgroundColor: fill }}
          />
          {label}{" "}
          <strong className="font-semibold text-foreground">{detail}</strong>
        </li>
      ))}
    </ul>
  );
}
