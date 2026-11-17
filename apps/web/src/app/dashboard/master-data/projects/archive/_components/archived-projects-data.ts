// Placeholder data: replace it with data from the API. The well and report counts are
// derived data and are meant to come from the backend, not to be computed in the browser.

export type ArchivedProject = {
  id: string;
  name: string;
  client: string;
  field: string;
  rig: string;
  wells: number;
  reports: number;
  lastReport: string;
  archivedOn: string;
};

export const archivedProjects: ArchivedProject[] = [
  {
    id: "z-01",
    name: "Project Z-01",
    client: "Northfield Petroleum",
    field: "Block 7",
    rig: "Rig C-1",
    wells: 2,
    reports: 85,
    lastReport: "14 Jan 2025",
    archivedOn: "14 Mar 2026",
  },
  {
    id: "z-02",
    name: "Project Z-02",
    client: "Sava Energy",
    field: "Block 9",
    rig: "Rig A-3",
    wells: 6,
    reports: 210,
    lastReport: "05 Sep 2025",
    archivedOn: "30 Nov 2025",
  },
];
