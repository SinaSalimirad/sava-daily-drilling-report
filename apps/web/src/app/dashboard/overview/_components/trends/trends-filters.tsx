"use client";

import { useState } from "react";
import { type PillOption, SelectPill } from "@/components/common/select-pill";

// Placeholder options: replace them with real filters once the API exists.
const ranges: PillOption[] = [
  { id: "7", title: "Last 7 reports" },
  { id: "14", title: "Last 14 reports" },
  { id: "30", title: "Last 30 reports" },
];

const scopes: PillOption[] = [
  { id: "section", title: "This section" },
  { id: "well", title: "Whole well" },
];

// One row above the charts: the filters apply to every card below.
export function TrendsFilters() {
  const [rangeId, setRangeId] = useState("14");
  const [scopeId, setScopeId] = useState("section");

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-xs tracking-widest text-muted-foreground uppercase">
        Trends
      </span>
      <SelectPill options={ranges} value={rangeId} onChange={setRangeId} />
      <SelectPill options={scopes} value={scopeId} onChange={setScopeId} />
    </div>
  );
}
