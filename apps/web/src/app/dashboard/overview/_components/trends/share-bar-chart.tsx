"use client";

import { barX, defineChart } from "@tanstack/charts";
import { Chart } from "@tanstack/charts/react";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { tooltip } from "@tanstack/charts/tooltip";
import { useMemo } from "react";

export type SharePart = {
  label: string;
  value: number;
  // What a reader sees on hover, for example "34%" or "17.0 h".
  detail: string;
  // A CSS color, for example "var(--series-1)".
  fill: string;
};

// One whole split into parts: a single stacked bar, widths proportional to the
// values. The 2px surface-colored stroke makes the gap between the parts.
export function ShareBarChart({
  parts,
  label,
  height = 28,
}: {
  parts: SharePart[];
  label: string;
  // 28 for a tall bar, 8 for a thin one beside a figure.
  height?: number;
}) {
  const definition = useMemo(
    () =>
      defineChart({
        guides: false,
        margin: 0,
        marks: [
          barX(
            parts.filter((part) => part.value > 0),
            {
              x: "value",
              y: () => "all",
              z: "label",
              fill: (part) => part.fill,
              stroke: "var(--background)",
              strokeWidth: 2,
              radius: 4,
            },
          ),
        ],
        scales: {
          x: { scale: scaleLinear },
          y: { scale: () => scaleBand().padding(0) },
        },
        tooltip: {
          use: tooltip,
          format: ({ datum }) => `${datum.label}: ${datum.detail}`,
        },
      }),
    [parts],
  );

  return (
    <Chart
      definition={definition}
      height={height}
      ariaLabel={label}
      ariaDescription={parts
        .map((part) => `${part.label} ${part.detail}`)
        .join(", ")}
    />
  );
}
