// Placeholder data: replace it with data from the API. The well count, the active well
// and the last report date are derived data and are meant to come from the backend,
// not to be computed in the browser.

export type ProjectStatus = "active" | "planned" | "completed";

export type Project = {
  id: string;
  name: string;
  client: string;
  field: string;
  wells: number;
  // null when no well of the project is being drilled right now.
  activeWell: string | null;
  // null when the project has no daily report yet.
  lastReport: string | null;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: "a-01",
    name: "Project A-01",
    client: "Sava Energy",
    field: "Block 12",
    wells: 4,
    activeWell: "A-01-03",
    lastReport: "19 Aug 2026",
    status: "active",
  },
  {
    id: "a-02",
    name: "Project A-02",
    client: "Sava Energy",
    field: "Block 14",
    wells: 2,
    activeWell: "A-02-01",
    lastReport: "18 Aug 2026",
    status: "active",
  },
  {
    id: "b-01",
    name: "Project B-01",
    client: "Northfield Petroleum",
    field: "Field B",
    wells: 3,
    activeWell: null,
    lastReport: null,
    status: "planned",
  },
  {
    id: "c-01",
    name: "Project C-01",
    client: "Northfield Petroleum Northfield Petroleum",
    field: "Block 3",
    wells: 5,
    activeWell: null,
    lastReport: "02 Feb 2026",
    status: "completed",
  },
];
