"use client";

import { barY, defineChart } from "@tanstack/charts";
import { Chart } from "@tanstack/charts/react";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { tooltip } from "@tanstack/charts/tooltip";
import { useMemo } from "react";

type Bar = { number: number; metres: number };

// A tiny column chart with no axes: the shape of the last reports at a glance.
export function MiniBarChart({
  bars,
  axisMax,
  label,
}: {
  bars: Bar[];
  axisMax: number;
  label: string;
}) {
  const definition = useMemo(
    () =>
      defineChart({
        guides: false,
        margin: 0,
        marks: [
          barY(bars, {
            x: "number",
            y: "metres",
            fill: "var(--series-1)",
            radius: 3,
            maxThickness: 14,
          }),
        ],
        scales: {
          x: { scale: () => scaleBand().padding(0.25) },
          y: { scale: () => scaleLinear().domain([0, axisMax]) },
        },
        tooltip: {
          use: tooltip,
          format: ({ datum }) => `${datum.metres} m · Report #${datum.number}`,
        },
      }),
    [bars, axisMax],
  );

  return <Chart definition={definition} height={32} ariaLabel={label} />;
}
