// Fixed categorical order: a series keeps its slot (and color) whatever is filtered.
export type SeriesSlot = 1 | 2 | 3 | 4 | 5 | 6 | 7;

// Full class names so Tailwind can find them.
export const seriesBg: Record<SeriesSlot, string> = {
  1: "bg-series-1",
  2: "bg-series-2",
  3: "bg-series-3",
  4: "bg-series-4",
  5: "bg-series-5",
  6: "bg-series-6",
  7: "bg-series-7",
};

export const seriesStroke: Record<SeriesSlot, string> = {
  1: "stroke-series-1",
  2: "stroke-series-2",
  3: "stroke-series-3",
  4: "stroke-series-4",
  5: "stroke-series-5",
  6: "stroke-series-6",
  7: "stroke-series-7",
};
