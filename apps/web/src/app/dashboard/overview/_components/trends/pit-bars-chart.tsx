"use client";

import { barX, defineChart } from "@tanstack/charts";
import { Chart } from "@tanstack/charts/react";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { tooltip } from "@tanstack/charts/tooltip";
import { useMemo } from "react";

type Pit = { name: string; volume: number; fill: string };

export const PIT_ROW_HEIGHT = 32;

// One thin bar per pit on a gray track. The names are the y axis; the volumes
// are printed by the card, in rows of the same height.
export function PitBarsChart({
  pits,
  capacity,
}: {
  pits: Pit[];
  capacity: number;
}) {
  const definition = useMemo(
    () =>
      defineChart({
        margin: { top: 0, bottom: 0, right: 0 },
        marks: [
          barX(pits, {
            x1: 0,
            x2: capacity,
            y: "name",
            fill: "var(--viz-grid)",
            radius: 4,
            maxThickness: 8,
          }),
          barX(pits, {
            x1: 0,
            x2: "volume",
            y: "name",
            fill: (pit) => pit.fill,
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
          format: ({ datum }) => `${datum.name}: ${datum.volume}`,
        },
      }),
    [pits, capacity],
  );

  return (
    <Chart
      definition={definition}
      height={pits.length * PIT_ROW_HEIGHT}
      ariaLabel="Volume in each surface pit"
    />
  );
}
