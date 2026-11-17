// Placeholder data: replace it with data from the API, the same way
// `projects-data.ts` is a placeholder for the projects list. The ids here match
// the ones in `projects-data.ts` on purpose, so a row's eye button always finds
// a matching detail record.

import type { ProjectStatus } from "@/app/dashboard/master-data/projects/_components/projects-data";
import { UNIT_PRESETS } from "@/app/dashboard/master-data/projects/new/_components/new-project-types";

export type RigType = "onshore" | "offshore";
export type ReportSubmissionState = "submitted" | "draft";

export type ProjectWell = {
  id: string;
  name: string;
  type: "Vertical" | "Directional";
  status: ProjectStatus;
  // null before the well is spudded.
  spudDate: string | null;
  reportCount: number;
  // Both are null together: a well with no report yet has no state to show.
  lastReportDate: string | null;
  lastReportState: ReportSubmissionState | null;
};

export type ActiveWellSummary = {
  wellName: string;
  reportNumber: number;
  reportDate: string;
  reportState: ReportSubmissionState;
};

export type RigEquipmentRow = {
  label: string;
  // e.g. "of 20" for a count out of a total, or a currency code for a price list.
  detail: string;
  count: number;
};

export type ProjectDetail = {
  id: string;
  name: string;
  code: string;
  status: ProjectStatus;
  client: string;
  contractor: string;
  rig: string;
  rigType: RigType;
  field: string;
  country: string;
  currency: string;
  reportHeader: string;
  unitsLabel: string;
  unitChips: [quantity: string, unit: string][];
  wells: ProjectWell[];
  // null when no well of the project is being drilled right now.
  activeWell: ActiveWellSummary | null;
  rigEquipment: RigEquipmentRow[];
  createdAt: string;
  lastChangeAt: string;
};

const oilfieldChips = UNIT_PRESETS.oilfield.chips;

const projectDetails: Record<string, ProjectDetail> = {
  "a-01": {
    id: "a-01",
    name: "Project A-01",
    code: "A-01",
    status: "active",
    client: "Sava Energy",
    contractor: "Contractor A",
    rig: "Rig A-7",
    rigType: "onshore",
    field: "Block 12",
    country: "Iran",
    currency: "USD",
    reportHeader: "Sava Energy Rep. · Contractor A Rep.",
    unitsLabel: "Workbook",
    unitChips: oilfieldChips,
    wells: [
      {
        id: "a-01-01",
        name: "A-01-01",
        type: "Vertical",
        status: "completed",
        spudDate: "20 Nov 2025",
        reportCount: 38,
        lastReportDate: "27 Dec 2025",
        lastReportState: "submitted",
      },
      {
        id: "a-01-02",
        name: "A-01-02",
        type: "Directional",
        status: "completed",
        spudDate: "15 Jan 2026",
        reportCount: 52,
        lastReportDate: "07 Mar 2026",
        lastReportState: "submitted",
      },
      {
        id: "a-01-03",
        name: "A-01-03",
        type: "Directional",
        status: "active",
        spudDate: "28 Jul 2026",
        reportCount: 23,
        lastReportDate: "19 Aug 2026",
        lastReportState: "draft",
      },
      {
        id: "a-01-04",
        name: "A-01-04",
        type: "Vertical",
        status: "planned",
        spudDate: null,
        reportCount: 0,
        lastReportDate: null,
        lastReportState: null,
      },
    ],
    activeWell: {
      wellName: "A-01-03",
      reportNumber: 23,
      reportDate: "19 Aug 2026",
      reportState: "draft",
    },
    rigEquipment: [
      { label: "Pits", detail: "of 20", count: 8 },
      { label: "Pumps", detail: "of 3", count: 3 },
      { label: "Solids control", detail: "of 10", count: 3 },
      { label: "Products on price list", detail: "USD", count: 28 },
    ],
    createdAt: "02 Nov 2025",
    lastChangeAt: "19 Aug 2026",
  },

  "a-02": {
    id: "a-02",
    name: "Project A-02",
    code: "A-02",
    status: "active",
    client: "Sava Energy",
    contractor: "Contractor A",
    rig: "Rig A-8",
    rigType: "onshore",
    field: "Block 14",
    country: "Iran",
    currency: "USD",
    reportHeader: "Sava Energy Rep. · Contractor A Rep.",
    unitsLabel: "Workbook",
    unitChips: oilfieldChips,
    wells: [
      {
        id: "a-02-01",
        name: "A-02-01",
        type: "Vertical",
        status: "active",
        spudDate: "10 Jun 2026",
        reportCount: 31,
        lastReportDate: "18 Aug 2026",
        lastReportState: "draft",
      },
      {
        id: "a-02-02",
        name: "A-02-02",
        type: "Directional",
        status: "planned",
        spudDate: null,
        reportCount: 0,
        lastReportDate: null,
        lastReportState: null,
      },
    ],
    activeWell: {
      wellName: "A-02-01",
      reportNumber: 31,
      reportDate: "18 Aug 2026",
      reportState: "draft",
    },
    rigEquipment: [
      { label: "Pits", detail: "of 20", count: 6 },
      { label: "Pumps", detail: "of 3", count: 2 },
      { label: "Solids control", detail: "of 10", count: 2 },
      { label: "Products on price list", detail: "USD", count: 18 },
    ],
    createdAt: "05 Jan 2026",
    lastChangeAt: "18 Aug 2026",
  },

  "b-01": {
    id: "b-01",
    name: "Project B-01",
    code: "B-01",
    status: "planned",
    client: "Northfield Petroleum",
    contractor: "Contractor B",
    rig: "Rig B-2",
    rigType: "offshore",
    field: "Field B",
    country: "Iran",
    currency: "USD",
    reportHeader: "Northfield Petroleum Rep. · Contractor B Rep.",
    unitsLabel: "Workbook",
    unitChips: oilfieldChips,
    wells: [
      {
        id: "b-01-01",
        name: "B-01-01",
        type: "Vertical",
        status: "planned",
        spudDate: null,
        reportCount: 0,
        lastReportDate: null,
        lastReportState: null,
      },
      {
        id: "b-01-02",
        name: "B-01-02",
        type: "Directional",
        status: "planned",
        spudDate: null,
        reportCount: 0,
        lastReportDate: null,
        lastReportState: null,
      },
      {
        id: "b-01-03",
        name: "B-01-03",
        type: "Vertical",
        status: "planned",
        spudDate: null,
        reportCount: 0,
        lastReportDate: null,
        lastReportState: null,
      },
    ],
    activeWell: null,
    rigEquipment: [
      { label: "Pits", detail: "of 16", count: 0 },
      { label: "Pumps", detail: "of 3", count: 0 },
      { label: "Solids control", detail: "of 8", count: 0 },
      { label: "Products on price list", detail: "USD", count: 0 },
    ],
    createdAt: "01 Oct 2026",
    lastChangeAt: "01 Oct 2026",
  },

  "c-01": {
    id: "c-01",
    name: "Project C-01",
    code: "C-01",
    status: "completed",
    client: "Northfield Petroleum Northfield Petroleum",
    contractor: "Contractor C",
    rig: "Rig C-5",
    rigType: "onshore",
    field: "Block 3",
    country: "Iran",
    currency: "USD",
    reportHeader: "Northfield Petroleum Rep. · Contractor C Rep.",
    unitsLabel: "Workbook",
    unitChips: oilfieldChips,
    wells: [
      {
        id: "c-01-01",
        name: "C-01-01",
        type: "Vertical",
        status: "completed",
        spudDate: "12 Mar 2025",
        reportCount: 41,
        lastReportDate: "22 Apr 2025",
        lastReportState: "submitted",
      },
      {
        id: "c-01-02",
        name: "C-01-02",
        type: "Directional",
        status: "completed",
        spudDate: "30 Apr 2025",
        reportCount: 47,
        lastReportDate: "16 Jun 2025",
        lastReportState: "submitted",
      },
      {
        id: "c-01-03",
        name: "C-01-03",
        type: "Vertical",
        status: "completed",
        spudDate: "20 Jun 2025",
        reportCount: 35,
        lastReportDate: "25 Jul 2025",
        lastReportState: "submitted",
      },
      {
        id: "c-01-04",
        name: "C-01-04",
        type: "Directional",
        status: "completed",
        spudDate: "02 Aug 2025",
        reportCount: 50,
        lastReportDate: "21 Sep 2025",
        lastReportState: "submitted",
      },
      {
        id: "c-01-05",
        name: "C-01-05",
        type: "Vertical",
        status: "completed",
        spudDate: "28 Dec 2025",
        reportCount: 29,
        lastReportDate: "02 Feb 2026",
        lastReportState: "submitted",
      },
    ],
    activeWell: null,
    rigEquipment: [
      { label: "Pits", detail: "of 20", count: 20 },
      { label: "Pumps", detail: "of 3", count: 3 },
      { label: "Solids control", detail: "of 10", count: 10 },
      { label: "Products on price list", detail: "USD", count: 45 },
    ],
    createdAt: "10 Mar 2025",
    lastChangeAt: "02 Feb 2026",
  },
};

export function getProjectDetail(projectId: string): ProjectDetail | undefined {
  return projectDetails[projectId];
}
