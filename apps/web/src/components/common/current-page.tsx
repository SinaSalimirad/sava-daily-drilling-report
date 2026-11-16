"use client";

import { useCurrentSection } from "@/components/common/nav-sections";

// Shows the name of the page that matches the current URL.
export function CurrentPage() {
  const current = useCurrentSection();

  return <h1 className="text-xl font-semibold">{current?.label}</h1>;
}
