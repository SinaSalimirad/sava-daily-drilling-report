import { PlusIcon } from "lucide-react";

import { CurrentPage } from "@/components/common/current-page";
import { DashboardHeader } from "@/components/common/dashboard-header";
import { DateRangeFilter } from "@/components/common/date-range-filter";
import { MainNav } from "@/components/common/main-nav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <MainNav />

      <main>
        <div className="flex items-center justify-between px-6 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Button>
            <PlusIcon data-icon="inline-start" />
            New report
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-4 px-6 py-3">
          <CurrentPage />
          <DateRangeFilter />
        </div>
      </main>
    </>
  );
}
