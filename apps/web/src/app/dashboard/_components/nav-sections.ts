"use client";

import {
  BookTextIcon,
  BoxesIcon,
  ChartNoAxesCombinedIcon,
  ClipboardListIcon,
  CylinderIcon,
  DropletsIcon,
  FlaskConicalIcon,
  LayoutDashboardIcon,
  type LucideIcon,
  SettingsIcon,
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
    label: "Daily Reports",
    href: "/dashboard/daily-reports",
    icon: ClipboardListIcon,
    items: ["Report list", "Report editor", "Activities", "Remarks"],
  },
  {
    label: "Fluid Properties",
    href: "/dashboard/fluid-properties",
    icon: FlaskConicalIcon,
    items: ["Mud samples", "Rheology", "Solids analysis", "Salt tables"],
  },
  {
    label: "Volumes & Pits",
    href: "/dashboard/volumes-and-pits",
    icon: CylinderIcon,
    items: ["Pit readings", "Volume accounting", "Losses"],
  },
  {
    label: "Inventory & Cost",
    href: "/dashboard/inventory-and-cost",
    icon: BoxesIcon,
    items: ["Stock", "Products used", "Price list", "Cost"],
  },
  {
    label: "Hydraulics",
    href: "/dashboard/hydraulics",
    icon: DropletsIcon,
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
    href: "/dashboard/recap",
    icon: ChartNoAxesCombinedIcon,
    items: ["Section recap", "Well recap", "Charts"],
  },
  {
    label: "Master Data",
    href: "/dashboard/master-data",
    icon: BookTextIcon,
    items: [
      "Projects",
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
    href: "/dashboard/settings",
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

// The URL of a sub page, e.g. (Master Data, "Projects") -> /dashboard/master-data/projects.
export const getItemHref = (section: NavSection, item: string) =>
  `${section.href}/${toSlug(item)}`;

// Every section URL starts with the Dashboard one ("/dashboard"), so the longest match wins:
// /dashboard/master-data/projects belongs to Master Data, not to Dashboard.
function findSection(pathname: string) {
  return sections
    .filter(({ href }) => pathname === href || pathname.startsWith(`${href}/`))
    .sort((a, b) => b.href.length - a.href.length)[0];
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
