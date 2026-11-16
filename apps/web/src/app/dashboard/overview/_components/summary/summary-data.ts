// Placeholder data: replace it with data from the API. Every figure, difference
// and check result is meant to come from the backend, not to be computed here.

export const kpis = {
  totalDepth: { value: "2,845", unit: "m", drilledToday: "+142 m" },
  mudWeight: {
    value: "76.5",
    unit: "PCF",
    delta: "+1.5 over plan",
    note: "plan 75.0 · sample 3, 18:00",
  },
  volumeBalance: {
    status: "Balanced",
    difference: "0 bbl difference",
    note: "end 3,240 = hole + surface",
  },
  mudInSystem: {
    value: "3,240",
    unit: "bbl",
    parts: [
      { label: "Active", volume: 1240, series: 1 },
      { label: "Reserve", volume: 820, series: 3 },
      { label: "Hole", volume: 1180, series: 7 },
    ],
  },
  dailyFluidCost: {
    value: "$8,420",
    note: { section: "$142,600", cumulative: "$318,750" },
  },
  holeCleaning: {
    value: "0.72",
    verdict: "Good",
    note: "transport ratio 68 % · cuttings 2.1 % · worst section: 12¼″ open hole",
  },
};

export const volumeAccounting = {
  capacity: 3240,
  // Bars use the volumes in barrels; losses are drawn as a length with a minus.
  movements: [
    {
      name: "Start volume",
      value: 3238,
      display: "3,238",
      fill: "var(--viz-other)",
    },
    { name: "+ Built", value: 190, display: "+190", fill: "var(--series-3)" },
    { name: "+ Received", value: 0, display: "0", fill: "var(--series-3)" },
    { name: "− Return", value: 0, display: "0", fill: "var(--series-2)" },
    {
      name: "− Total losses",
      value: 188,
      display: "−188",
      fill: "var(--series-2)",
    },
  ],
  end: {
    name: "= End volume",
    value: 3240,
    display: "3,240",
    fill: "var(--series-1)",
  },
  balance: {
    title: "Books balance",
    detail: "End 3,240 = hole 1,180 + active 1,240 + reserve 820 · difference",
    difference: "0 bbl",
  },
  lossesTitle: "Where the 188 bbl went",
  lossesCapacity: 100,
  losses: [
    { name: "Shakers", value: 96, display: "96", fill: "var(--series-2)" },
    { name: "Dumped", value: 40, display: "40", fill: "var(--series-2)" },
    { name: "Trip loss", value: 20, display: "20", fill: "var(--series-2)" },
    {
      name: "Desander / desilter",
      value: 18,
      display: "18",
      fill: "var(--series-2)",
    },
    { name: "Evaporation", value: 14, display: "14", fill: "var(--series-2)" },
    {
      name: "Formation · left in hole",
      value: 0,
      display: "0",
      fill: "var(--series-2)",
    },
  ],
  lossesNote:
    "Shakers is the balancing item on section and well columns, as in the workbook.",
};

export type CheckLevel = "ok" | "warning" | "info";

export const checks: {
  level: CheckLevel;
  title: string;
  detail: string;
  action?: string;
}[] = [
  { level: "ok", title: "Volume books balance", detail: "Difference 0 bbl" },
  {
    level: "ok",
    title: "No negative final stock",
    detail: "28 products checked",
  },
  {
    level: "ok",
    title: "Activity hours total 24.0",
    detail: "5 activities recorded",
  },
  {
    level: "warning",
    title: "Survey not updated since report #21",
    detail: "Directional well — TVD and ECD may be stale.",
    action: "Open survey",
  },
  {
    level: "warning",
    title: "Operator representative is empty",
    detail: "Required on the printed report header",
  },
  {
    level: "info",
    title: "2 products below reorder level",
    detail: "Caustic Soda · Defoamer",
  },
];
