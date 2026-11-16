"use client";

import { useCurrentPageName } from "@/app/dashboard/_components/nav-sections";

// Shows the name of the page that matches the current URL.
export function CurrentPage() {
  const pageName = useCurrentPageName();

  return <h1 className="text-3xl font-bold">{pageName}</h1>;
}
