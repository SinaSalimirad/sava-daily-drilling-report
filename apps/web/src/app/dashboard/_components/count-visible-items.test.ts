import { describe, expect, it } from "bun:test";
import { countVisibleItems } from "@/app/dashboard/_components/count-visible-items";

describe("countVisibleItems", () => {
  it("fits every item when the row has enough room, ignoring the More width", () => {
    const count = countVisibleItems({
      itemWidths: [100, 100, 100],
      moreWidth: 9999,
      gap: 10,
      available: 320, // 300 + 2 gaps of 10
    });

    expect(count).toBe(3);
  });

  it("drops items that do not fit, reserving room for the More button", () => {
    const count = countVisibleItems({
      itemWidths: [100, 100, 100, 100],
      moreWidth: 60,
      gap: 10,
      available: 250, // More (60) + item1 (10+100) + item2 (10+100) = 280 > 250
    });

    // item1 fits (60+10+100=170), item2 fits (170+10+100=280 > 250 -> stop before it)
    expect(count).toBe(1);
  });

  it("returns 0 when even the More button and the first item do not fit", () => {
    const count = countVisibleItems({
      itemWidths: [200],
      moreWidth: 60,
      gap: 10,
      available: 50,
    });

    expect(count).toBe(0);
  });

  it("returns 0 for an empty row", () => {
    const count = countVisibleItems({
      itemWidths: [],
      moreWidth: 60,
      gap: 10,
      available: 500,
    });

    expect(count).toBe(0);
  });

  it("treats an exact fit (used === available) as fitting, not as overflow", () => {
    const count = countVisibleItems({
      itemWidths: [100, 100],
      moreWidth: 50,
      gap: 10,
      available: 160, // forces the loop (200 + 1 gap of 10 > 160); item1 lands at exactly 160
    });

    // used after item1: 50 (more) + 10 + 100 = 160 (<=160, fits)
    // used after item2: 160 + 10 + 100 = 270 (>160, stop)
    expect(count).toBe(1);
  });

  it("fits all items when the total plus gaps lands exactly on the available width", () => {
    const count = countVisibleItems({
      itemWidths: [100, 100],
      moreWidth: 9999,
      gap: 10,
      available: 210, // 200 + 1 gap of 10, exactly
    });

    expect(count).toBe(2);
  });
});
