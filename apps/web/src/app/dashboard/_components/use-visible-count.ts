"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { countVisibleItems } from "@/app/dashboard/_components/count-visible-items";

// Works out how many items fit in the container, like the GitHub tab bar.
// It measures a hidden copy of the items (the last child must be the "More" button),
// so the real row can drop items without losing their widths.
export function useVisibleCount(itemCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(itemCount);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const update = () => {
      const widths = Array.from(
        measure.children,
        (child) => child.getBoundingClientRect().width,
      );
      const moreWidth = widths.pop() ?? 0;
      const gap = Number.parseFloat(getComputedStyle(measure).columnGap) || 0;

      setVisibleCount(
        countVisibleItems({
          itemWidths: widths,
          moreWidth,
          gap,
          available: container.clientWidth,
        }),
      );
    };

    update();
    // The container changes with the window; the hidden copy changes when the font loads.
    const observer = new ResizeObserver(update);
    observer.observe(container);
    observer.observe(measure);
    return () => observer.disconnect();
  }, []);

  return { containerRef, measureRef, visibleCount };
}
