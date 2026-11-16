"use client";

import { defineChart, dot, lineY, ruleY } from "@tanstack/charts";
import { Chart } from "@tanstack/charts/react";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { tooltip } from "@tanstack/charts/tooltip";
import { useMemo } from "react";

// A 2px line, a dashed plan line, and a dot on the latest value. No axes.
export function TrendSparkline({
  values,
  plan,
  color,
  unit,
  label,
}: {
  values: number[];
  plan: number;
  // A CSS color, for example "var(--series-1)".
  color: string;
  unit: string;
  label: string;
}) {
  const definition = useMemo(() => {
    const rows = values.map((value, index) => ({ index, value }));
    const latest = rows.slice(-1);

    return defineChart({
      guides: false,
      margin: { top: 6, right: 8, bottom: 6, left: 4 },
      marks: [
        ruleY([plan], {
          strokeDasharray: "4 4",
          strokeOpacity: 0.5,
          strokeWidth: 1,
        }),
        lineY(rows, { x: "index", y: "value", stroke: color, strokeWidth: 2 }),
        dot(latest, {
          x: "index",
          y: "value",
          r: 5,
          fill: color,
          stroke: "var(--card)",
          strokeWidth: 2,
        }),
      ],
      scales: {
        x: { scale: scaleLinear },
        y: { scale: scaleLinear },
      },
      tooltip: {
        use: tooltip,
        format: ({ datum }) => `${datum.value} ${unit}`,
      },
    });
  }, [values, plan, color, unit]);

  return (
    <Chart
      definition={definition}
      height={44}
      ariaLabel={label}
      ariaDescription={`Latest ${values[values.length - 1]} ${unit}, plan ${plan} ${unit}.`}
    />
  );
}
