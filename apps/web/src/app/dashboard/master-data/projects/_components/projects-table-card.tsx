"use client";

import { useTable } from "@tanstack/react-table";
import {
  PROJECTS_DEFAULT_PAGE_SIZE,
  projectsColumns,
  projectsTableFeatures,
} from "@/app/dashboard/master-data/projects/_components/projects-columns";
import { projects } from "@/app/dashboard/master-data/projects/_components/projects-data";
import { ProjectsPagination } from "@/app/dashboard/master-data/projects/_components/projects-pagination";
import { DataTable } from "@/components/common/data-table";
import { OverviewCard } from "@/components/common/overview-card";

const columnWidths: Record<string, number> = {
  name: 10,
  client: 11,
  field: 7,
  wells: 5,
  activeWell: 7,
  lastReport: 8,
  status: 7,
  actions: 6,
};

const leftAlignedColumnIds = new Set(["name", "client", "field", "actions"]);

export function ProjectsTableCard() {
  const table = useTable({
    features: projectsTableFeatures,
    columns: projectsColumns,
    data: projects,
    initialState: {
      pagination: { pageIndex: 0, pageSize: PROJECTS_DEFAULT_PAGE_SIZE },
    },
  });

  return (
    <OverviewCard title="All projects" meta={`${projects.length} projects`}>
      <DataTable
        table={table}
        columnWidths={columnWidths}
        leftAlignedColumnIds={leftAlignedColumnIds}
        rowHeaderColumnId="name"
      />
      <ProjectsPagination table={table} />
    </OverviewCard>
  );
}
