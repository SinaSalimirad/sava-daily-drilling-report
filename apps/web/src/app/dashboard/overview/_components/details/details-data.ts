// Placeholder data: replace it with data from the API. Totals and shares are
// meant to come from the backend, not to be computed in the browser.

export const hydraulics = {
  subtitle: "actual mode · 782 gpm",
  stats: [
    { label: "Standpipe", value: "2,480", unit: "psi" },
    { label: "ECD at TD", value: "78.9", unit: "PCF" },
    { label: "HSI", value: "2.8", unit: "hp/in²" },
    { label: "Bottoms-up", value: "42", unit: "min" },
  ],
  lossTotal: "2,480 psi total",
  // Pressure loss in psi, in the order of the string from bit to surface.
  losses: [
    { label: "Bit", psi: 1018, series: 1 },
    { label: "Drill pipe", psi: 612, series: 2 },
    { label: "Motor", psi: 310, series: 3 },
    { label: "Annulus", psi: 223, series: 4 },
    { label: "Collars", psi: 134, series: 5 },
    { label: "Surface", psi: 95, series: 6 },
    { label: "HWDP", psi: 88, series: 7 },
  ],
  note: "Pumps #1 95 SPM · #2 92 SPM · #3 idle · measured SPP 2,480 psi, scaling factor 0.98",
};

export const solidsAnalysis = {
  subtitle: "water-based · weighted",
  stats: [
    { label: "Low-gravity", value: "4.8", unit: "% vol" },
    { label: "High-gravity", value: "12.4", unit: "% vol" },
    { label: "Bentonite", value: "2.1", unit: "% vol" },
    { label: "MBT", value: "12.5", unit: "lb/bbl" },
  ],
  composition: [
    { label: "Water", percent: 78.6, series: 1 },
    { label: "HGS", percent: 12.4, series: 2 },
    { label: "LGS", percent: 4.8, series: 3 },
    { label: "Salt", percent: 4.2, series: 4 },
  ],
  note: "Drill-solids SG 2.50 · retort: water 78.6 %, oil 0.0 %, solids 17.2 % · chlorides 188,000 mg/L",
};

export type RecentReport = {
  number: number;
  date: string;
  section: string;
  totalDepth: string;
  // null when nothing was drilled that day.
  drilled: string | null;
  mudWeight: string;
  losses: string;
  cost: string;
  status: "draft" | "submitted";
  edited?: boolean;
};

export const recentReports: RecentReport[] = [
  {
    number: 23,
    date: "19 Aug 2026",
    section: "12¼″",
    totalDepth: "2,845 m",
    drilled: "+142 m",
    mudWeight: "76.5",
    losses: "188 bbl",
    cost: "$8,420",
    status: "draft",
  },
  {
    number: 22,
    date: "18 Aug 2026",
    section: "12¼″",
    totalDepth: "2,703 m",
    drilled: "+129 m",
    mudWeight: "76.3",
    losses: "172 bbl",
    cost: "$7,960",
    status: "submitted",
  },
  {
    number: 21,
    date: "17 Aug 2026",
    section: "12¼″",
    totalDepth: "2,574 m",
    drilled: "+118 m",
    mudWeight: "76.1",
    losses: "204 bbl",
    cost: "$9,140",
    status: "submitted",
  },
  {
    number: 20,
    date: "16 Aug 2026",
    section: "12¼″",
    totalDepth: "2,456 m",
    drilled: null,
    mudWeight: "76.0",
    losses: "96 bbl",
    cost: "$2,310",
    status: "submitted",
  },
  {
    number: 19,
    date: "15 Aug 2026",
    section: "12¼″",
    totalDepth: "2,456 m",
    drilled: "+102 m",
    mudWeight: "75.6",
    losses: "165 bbl",
    cost: "$6,880",
    status: "submitted",
    edited: true,
  },
  {
    number: 18,
    date: "14 Aug 2026",
    section: "12¼″",
    totalDepth: "2,354 m",
    drilled: "+137 m",
    mudWeight: "75.4",
    losses: "181 bbl",
    cost: "$8,050",
    status: "submitted",
  },
];
