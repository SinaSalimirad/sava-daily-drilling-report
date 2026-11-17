import { describe, expect, it } from "bun:test";
import { LayoutDashboardIcon } from "lucide-react";
import {
  getItemHref,
  type NavSection,
  sections,
} from "@/app/dashboard/_components/nav-sections";

// The icon is never read by getItemHref; reusing a real one keeps the fixture
// simple and avoids faking the shape of a LucideIcon component.
function section(href: string): NavSection {
  return { label: "Test", href, icon: LayoutDashboardIcon, items: [] };
}

describe("getItemHref", () => {
  it("appends the slug of a simple, lower-case, single-word item", () => {
    expect(getItemHref(section("/dashboard"), "Overview")).toBe(
      "/dashboard/overview",
    );
  });

  it("turns spaces into hyphens for a multi-word item", () => {
    expect(getItemHref(section("/dashboard"), "Well summary")).toBe(
      "/dashboard/well-summary",
    );
  });

  it("strips punctuation instead of keeping it in the URL", () => {
    expect(getItemHref(section("/dashboard/settings"), "Billing & Plan")).toBe(
      "/dashboard/settings/billing-plan",
    );
  });

  it("collapses repeated separators and trims leading/trailing hyphens", () => {
    expect(getItemHref(section("/dashboard"), "  A -- B  ")).toBe(
      "/dashboard/a-b",
    );
  });

  it("produces the slug the real Master Data and Hydraulics items rely on", () => {
    const masterData = sections.find((s) => s.label === "Master Data");
    const hydraulics = sections.find((s) => s.label === "Hydraulics");
    if (!masterData || !hydraulics) throw new Error("fixture section missing");

    expect(getItemHref(masterData, "Solids control")).toBe(
      "/dashboard/master-data/solids-control",
    );
    expect(getItemHref(hydraulics, "BHA & bit")).toBe(
      "/dashboard/hydraulics/bha-bit",
    );
  });
});
