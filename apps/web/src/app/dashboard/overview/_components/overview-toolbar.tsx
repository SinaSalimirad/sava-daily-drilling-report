"use client";

import { CalendarIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { CurrentPage } from "@/app/dashboard/_components/current-page";
import { type PillOption, SelectPill } from "@/components/common/select-pill";
import { Button } from "@/components/ui/button";

// Placeholder options: replace them with data from the API.
const reports: PillOption[] = [
  { id: "23", title: "Report #23", detail: "19 Aug 2026" },
  { id: "22", title: "Report #22", detail: "18 Aug 2026" },
  { id: "21", title: "Report #21", detail: "17 Aug 2026" },
];

const sections: PillOption[] = [
  { id: "17.5", title: "Section", highlight: "17½″", detail: "Spud mud" },
  { id: "12.25", title: "Section", highlight: "12¼″", detail: "KCl / Polymer" },
  { id: "8.5", title: "Section", highlight: "8½″", detail: "Oil-based" },
];

const units: PillOption[] = [
  { id: "field", title: "Units", detail: "bbl · PCF · psi · m" },
  { id: "metric", title: "Units", detail: "m³ · kg/m³ · bar · m" },
];

export function OverviewToolbar() {
  const [reportId, setReportId] = useState("23");
  const [sectionId, setSectionId] = useState("12.25");
  const [unitsId, setUnitsId] = useState("field");

  return (
    <div className="flex flex-wrap items-center gap-3">
      <CurrentPage />

      <SelectPill
        icon={CalendarIcon}
        options={reports}
        value={reportId}
        onChange={setReportId}
      />
      <SelectPill
        options={sections}
        value={sectionId}
        onChange={setSectionId}
      />
      <SelectPill options={units} value={unitsId} onChange={setUnitsId} />

      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline" className="border-0 bg-background">
          Open report #{reportId}
        </Button>
        <Button>
          <PlusIcon data-icon="inline-start" />
          New report
        </Button>
      </div>
    </div>
  );
}
