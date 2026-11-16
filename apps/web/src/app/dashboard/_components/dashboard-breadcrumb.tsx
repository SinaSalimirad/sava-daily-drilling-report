"use client";

import {
  useCurrentPageName,
  useCurrentSection,
} from "@/app/dashboard/_components/nav-sections";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Section / page for the current URL, e.g. /dashboard/overview -> Dashboard / Overview.
export function DashboardBreadcrumb() {
  const section = useCurrentSection();
  const pageName = useCurrentPageName();

  if (!section || !pageName) return null;

  // On the section's own URL there is no sub page, so the section is the current page.
  const isSectionPage = pageName === section.label;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {isSectionPage ? (
          <BreadcrumbItem>
            <BreadcrumbPage>{section.label}</BreadcrumbPage>
          </BreadcrumbItem>
        ) : (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={section.href}>
                {section.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{pageName}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
