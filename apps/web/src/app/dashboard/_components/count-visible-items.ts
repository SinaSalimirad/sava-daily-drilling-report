type CountVisibleItemsInput = {
  itemWidths: number[];
  // Width of the "More" button, which is only shown when some items do not fit.
  moreWidth: number;
  gap: number;
  available: number;
};

// How many items fit in a row of `available` pixels. The ones that do not fit
// go into the "More" menu, which takes space itself.
export function countVisibleItems({
  itemWidths,
  moreWidth,
  gap,
  available,
}: CountVisibleItemsInput): number {
  const gaps = Math.max(itemWidths.length - 1, 0);
  const totalWidth = itemWidths.reduce((sum, width) => sum + width, 0);
  if (totalWidth + gap * gaps <= available) return itemWidths.length;

  // Every item is followed by a gap: either the next item or the "More" button.
  let used = moreWidth;
  let count = 0;
  for (const width of itemWidths) {
    used += gap + width;
    if (used > available) break;
    count += 1;
  }
  return count;
}
