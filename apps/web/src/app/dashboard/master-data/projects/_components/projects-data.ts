// Placeholder data: replace it with data from the API. The well count is derived data
// and is meant to come from the backend, not to be computed in the browser.

export type ProjectStatus = "active" | "planned" | "completed";

export type Project = {
  id: string;
  name: string;
  client: string;
  location: string;
  wells: number;
  status: ProjectStatus;
  startDate: string;
};

export const projects: Project[] = [
  {
    id: "a-01",
    name: "Project A-01",
    client: "Sava Energy",
    location: "Onshore · Block 12",
    wells: 4,
    status: "active",
    startDate: "03 Mar 2026",
  },
  {
    id: "a-02",
    name: "Project A-02",
    client: "Sava Energy",
    location: "Onshore · Block 14",
    wells: 2,
    status: "active",
    startDate: "21 May 2026",
  },
  {
    id: "b-01",
    name: "Project B-01",
    client: "Northfield Petroleum",
    location: "Offshore · Field B",
    wells: 3,
    status: "planned",
    startDate: "10 Jan 2027",
  },
  {
    id: "c-01",
    name: "Project C-01",
    client: "Northfield Petroleum",
    location: "Onshore · Block 3",
    wells: 5,
    status: "completed",
    startDate: "14 Aug 2025",
  },
];
