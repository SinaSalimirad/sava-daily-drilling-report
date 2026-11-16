import type { SeriesSlot } from "@/app/dashboard/overview/_components/trends/series";

// Placeholder data: replace it with data from the API. Every total, average and
// share below is meant to come from the backend, not to be computed in the browser.

export const metresDrilled = {
  axisMax: 160,
  ticks: [0, 50, 100, 150],
  average: 99,
  reports: [
    { number: 10, metres: 96 },
    { number: 11, metres: 112 },
    { number: 12, metres: 134 },
    { number: 13, metres: 88 },
    { number: 14, metres: 0 },
    { number: 15, metres: 64 },
    { number: 16, metres: 120 },
    { number: 17, metres: 148 },
    { number: 18, metres: 137 },
    { number: 19, metres: 102 },
    { number: 20, metres: 0 },
    { number: 21, metres: 118 },
    { number: 22, metres: 128 },
    { number: 23, metres: 141 },
  ],
};

export type MudProperty = {
  label: string;
  value: string;
  unit: string;
  delta: string;
  // Whether the change against the plan is good or bad for the well.
  deltaTone: "good" | "bad";
  plan: number;
  planNote: string;
  series: SeriesSlot;
  points: number[];
};

export const mudProperties: MudProperty[] = [
  {
    label: "Mud weight",
    value: "76.5",
    unit: "PCF",
    delta: "+1.5",
    deltaTone: "bad",
    plan: 75.0,
    planNote: "plan 75.0 PCF (dashed)",
    series: 1,
    points: [
      74.6, 74.8, 75.0, 75.3, 75.5, 75.6, 75.9, 76.0, 76.1, 76.2, 76.3, 76.4,
      76.5, 76.5,
    ],
  },
  {
    label: "Yield point",
    value: "18",
    unit: "lb/100 ft²",
    delta: "+2",
    deltaTone: "bad",
    plan: 16,
    planNote: "plan 16 lb/100 ft² (dashed)",
    series: 3,
    points: [
      15.5, 15.8, 16.2, 16.3, 17, 17.2, 16.8, 17.5, 17.1, 17.6, 18.2, 17.8,
      18.0, 18.0,
    ],
  },
  {
    label: "API fluid loss",
    value: "5.2",
    unit: "ml/30 min",
    delta: "−0.8",
    deltaTone: "good",
    plan: 6.0,
    planNote: "plan 6.0 ml (dashed) · below plan is good",
    series: 7,
    points: [
      6.6, 6.4, 6.2, 6.0, 5.9, 5.8, 5.7, 5.6, 5.5, 5.5, 5.4, 5.3, 5.2, 5.2,
    ],
  },
];

export type PitKind = "active" | "reserve" | "notMud";

export const surfacePits = {
  capacity: 500,
  pits: [
    { name: "Pit 1", volume: 420, kind: "active" },
    { name: "Pit 2", volume: 410, kind: "active" },
    { name: "Pit 3", volume: 410, kind: "active" },
    { name: "Pit 4", volume: 430, kind: "reserve" },
    { name: "Pit 5", volume: 390, kind: "reserve" },
    { name: "Pit 6", volume: 0, kind: "reserve" },
    { name: "Pit 7", volume: 180, kind: "notMud" },
    { name: "Pit 8", volume: 0, kind: "reserve" },
  ] satisfies { name: string; volume: number; kind: PitKind }[],
  totals: [
    { kind: "active", label: "Active", volume: "1,240" },
    { kind: "reserve", label: "Reserve", volume: "820" },
    { kind: "notMud", label: "Not mud", volume: "180" },
  ] satisfies { kind: PitKind; label: string; volume: string }[],
};

export const productsUsed = {
  // Size of the whole product catalogue, not only the rows below.
  catalogueSize: 28,
  rows: [
    { name: "Barite", used: "18.0 MT", stockAfter: "142.0", cost: "$2,840" },
    { name: "KCl", used: "4.8 MT", stockAfter: "36.5", cost: "$1,920" },
    { name: "PAC-LV", used: "12 sx", stockAfter: "148", cost: "$1,310" },
    { name: "XC Polymer", used: "8 sx", stockAfter: "64", cost: "$980" },
    { name: "Lubricant", used: "6 bbl", stockAfter: "22", cost: "$640" },
    {
      name: "Caustic Soda",
      used: "4 sx",
      stockAfter: "9",
      cost: "$190",
      low: true,
    },
    { name: "Soda Ash", used: "3 sx", stockAfter: "71", cost: "$320" },
    {
      name: "Defoamer",
      used: "1 bbl",
      stockAfter: "4",
      cost: "$220",
      low: true,
    },
  ],
};

export const fluidCost = {
  stats: [
    { label: "Daily", value: "$8,420" },
    { label: "Section", value: "$142,600" },
    { label: "Month to date", value: "$186,300" },
    { label: "Cumulative", value: "$318,750", note: "stock $412,900" },
  ],
  // Share of today's cost, in percent.
  byProduct: [
    { label: "Barite", share: 34, series: 1 },
    { label: "KCl", share: 23, series: 2 },
    { label: "PAC-LV", share: 16, series: 3 },
    { label: "XC Polymer", share: 12, series: 4 },
    { label: "Lubricant", share: 8, series: 5 },
    { label: "Others", share: 7, series: null },
  ] satisfies { label: string; share: number; series: SeriesSlot | null }[],
};

export const activities = {
  parts: [
    { label: "Drilling", hours: 17, series: 1 },
    { label: "Tripping", hours: 3, series: 2 },
    { label: "Circulation", hours: 2.5, series: 3 },
    { label: "Survey", hours: 1, series: 4 },
    { label: "Rig repair", hours: 0.5, series: 5 },
  ] satisfies { label: string; hours: number; series: SeriesSlot }[],
  present: "Drilling",
  total: "24.0 / 24 h",
};
