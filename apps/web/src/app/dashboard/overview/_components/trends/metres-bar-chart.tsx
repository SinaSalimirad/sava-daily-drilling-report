"use client";

import { barY, defineChart, ruleY } from "@tanstack/charts";
import { Chart } from "@tanstack/charts/react";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { tooltip } from "@tanstack/charts/tooltip";
import { useMemo } from "react";

type Report = { number: number; metres: number };

// Columns per report with a dashed line for the average.
export function MetresBarChart({
  reports,
  average,
  axisMax,
  ticks,
}: {
  reports: Report[];
  average: number;
  axisMax: number;
  ticks: number[];
}) {
  const definition = useMemo(
    () =>
      defineChart({
        marks: [
          barY(reports, {
            x: "number",
            y: "metres",
            fill: "var(--series-1)",
            radius: { end: 4 },
            maxThickness: 24,
          }),
          ruleY([average], {
            strokeDasharray: "4 4",
            strokeOpacity: 0.6,
            strokeWidth: 1,
          }),
        ],
        scales: {
          x: { scale: () => scaleBand().padding(0.2) },
          y: {
            scale: () => scaleLinear().domain([0, axisMax]),
            grid: { stroke: "var(--viz-grid)" },
            axis: { line: false, ticks: { values: ticks, size: 0 } },
          },
        },
        tooltip: {
          use: tooltip,
          format: ({ datum }) => `${datum.metres} m · Report #${datum.number}`,
        },
      }),
    [reports, average, axisMax, ticks],
  );

  return (
    <Chart
      definition={definition}
      height={240}
      ariaLabel="Metres drilled per report"
      ariaDescription={`Columns for reports ${reports[0]?.number} to ${reports[reports.length - 1]?.number}, average ${average} metres.`}
    />
  );
}
