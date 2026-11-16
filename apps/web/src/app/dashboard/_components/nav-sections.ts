"use client";

import {
  ChartNoAxesCombinedIcon,
  CreditCardIcon,
  FlaskConicalIcon,
  LayoutDashboardIcon,
  LifeBuoyIcon,
  type LucideIcon,
  MegaphoneIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

export type NavSection = {
  label: string;
  href: string;
  icon: LucideIcon;
  items: string[];
};

// Placeholder items: replace them with real pages when the routes exist.
export const sections: NavSection[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboardIcon,
    items: ["Overview", "Well summary", "Fleet"],
  },
  {
    label: "Daily-Reports",
    href: "/daily-reports",
    icon: MegaphoneIcon,
    items: ["Report list", "Report editor", "Activities", "Remarks"],
  },
  {
    label: "Fluid Properties",
    href: "/fluid-properties",
    icon: FlaskConicalIcon,
    items: ["Mud samples", "Rheology", "Solids analysis", "Salt tables"],
  },
  {
    label: "Volumes & Pits",
    href: "/volumes-&-pits",
    icon: SettingsIcon,
    items: ["Pit readings", "Volume accounting", "Losses"],
  },
  {
    label: "Inventory & Cost",
    href: "/inventory-&-Cost",
    icon: CreditCardIcon,
    items: ["Stock", "Products used", "Price list", "Cost"],
  },
  {
    label: "Hydraulics",
    href: "/hydraulics",
    icon: CreditCardIcon,
    items: [
      "Wellbore geometry",
      "BHA & bit",
      "Survey",
      "Pressure loss",
      "Hole cleaning",
    ],
  },
  {
    label: "Recap",
    href: "/recap",
    icon: CreditCardIcon,
    items: ["Section recap", "Well recap", "Charts"],
  },
  {
    label: "Master Data",
    href: "/master-data",
    icon: LifeBuoyIcon,
    items: [
      "Project",
      "Wells",
      "Sections",
      "Pits",
      "Pumps",
      "Solids control",
      "Products",
    ],
  },
  {
    label: "Settings & Integrations",
    href: "/settings",
    icon: SettingsIcon,
    items: ["General", "Integrations"],
  },
];

// "Well summary" -> "well-summary": the URL segment of a sub page.
const toSlug = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function findSection(pathname: string) {
  return sections.find(
    ({ href }) => pathname === href || pathname.startsWith(`${href}/`),
  );
}

// The section that matches the current URL, e.g. /dashboard/overview -> Dashboard.
export function useCurrentSection(): NavSection | undefined {
  return findSection(usePathname());
}

// The name of the current page: the sub page when there is one
// (/dashboard/overview -> Overview), otherwise the section name.
export function useCurrentPageName(): string | undefined {
  const pathname = usePathname();
  const section = findSection(pathname);
  if (!section) return undefined;

  const subPageSlug = pathname.slice(section.href.length + 1).split("/")[0];
  const subPage = section.items.find((item) => toSlug(item) === subPageSlug);
  return subPage ?? section.label;
}
