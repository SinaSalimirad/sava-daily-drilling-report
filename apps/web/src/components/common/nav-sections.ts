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
    items: ["Overview", "Reports"],
  },
  {
    label: "Visitor Analytics",
    href: "/visitor-analytics",
    icon: ChartNoAxesCombinedIcon,
    items: ["Traffic", "Sources"],
  },
  {
    label: "Leads",
    href: "/leads",
    icon: UsersIcon,
    items: ["All leads", "Import"],
  },
  {
    label: "Campaign",
    href: "/campaign",
    icon: MegaphoneIcon,
    items: ["Active", "Archived"],
  },
  {
    label: "A/B Testing Suite",
    href: "/ab-testing",
    icon: FlaskConicalIcon,
    items: ["Experiments", "Results"],
  },
  {
    label: "Payment",
    href: "/payment",
    icon: CreditCardIcon,
    items: ["Invoices", "Billing"],
  },
  {
    label: "Settings & Integrations",
    href: "/settings",
    icon: SettingsIcon,
    items: ["General", "Integrations"],
  },
  {
    label: "Support",
    href: "/support",
    icon: LifeBuoyIcon,
    items: ["Help center", "Contact us"],
  },
];

// The section that matches the current URL, e.g. /dashboard/reports -> Dashboard.
export function useCurrentSection(): NavSection | undefined {
  const pathname = usePathname();
  return sections.find(
    ({ href }) => pathname === href || pathname.startsWith(`${href}/`),
  );
}
