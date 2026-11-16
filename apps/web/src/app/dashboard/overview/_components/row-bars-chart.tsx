"use client";

import { barX, defineChart } from "@tanstack/charts";
import { Chart } from "@tanstack/charts/react";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { tooltip } from "@tanstack/charts/tooltip";
import { useMemo } from "react";

export type RowBar = {
  name: string;
  // Length of the bar. Always positive: a loss is drawn as a length too.
  value: number;
  // The text a reader sees for this row, for example "+190" or "−188".
  display: string;
  // A CSS color, for example "var(--series-1)".
  fill: string;
};

export const ROW_HEIGHT = 32;

// One thin bar per row on a gray track. The names are the y axis; the values
// are printed by the card, in rows of the same height (ROW_HEIGHT).
export function RowBarsChart({
  rows,
  capacity,
  ariaLabel,
  rowHeight = ROW_HEIGHT,
}: {
  rows: RowBar[];
  // The value at which the bar fills its track.
  capacity: number;
  ariaLabel: string;
  rowHeight?: number;
}) {
  const definition = useMemo(
    () =>
      defineChart({
        margin: { top: 0, bottom: 0, right: 0 },
        marks: [
          barX(rows, {
            x1: 0,
            x2: capacity,
            y: "name",
            fill: "var(--viz-grid)",
            radius: 4,
            maxThickness: 8,
          }),
          barX(rows, {
            x1: 0,
            x2: "value",
            y: "name",
            fill: (row) => row.fill,
            radius: 4,
            maxThickness: 8,
          }),
        ],
        scales: {
          x: { scale: () => scaleLinear().domain([0, capacity]), axis: false },
          y: {
            scale: () => scaleBand().padding(0),
            axis: {
              line: false,
              ticks: { size: 0 },
              tickLabels: { fontSize: 14 },
            },
          },
        },
        tooltip: {
          use: tooltip,
          format: ({ datum }) => `${datum.name}: ${datum.display}`,
        },
      }),
    [rows, capacity],
  );

  return (
    <Chart
      definition={definition}
      height={rows.length * rowHeight}
      ariaLabel={ariaLabel}
    />
  );
}
