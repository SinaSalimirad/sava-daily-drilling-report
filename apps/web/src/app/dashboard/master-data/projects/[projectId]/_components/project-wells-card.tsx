"use client";

import { useTable } from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";
import type { ProjectDetail } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";
import {
  projectWellsColumns,
  projectWellsTableFeatures,
} from "@/app/dashboard/master-data/projects/[projectId]/_components/project-wells-columns";
import { DataTable } from "@/components/common/data-table";
import { OverviewCard } from "@/components/common/overview-card";
import { Button } from "@/components/ui/button";

const columnWidths: Record<string, number> = {
  name: 7,
  type: 7,
  status: 7,
  spudDate: 7,
  reportCount: 7,
  lastReportDate: 11,
};

const leftAlignedColumnIds = new Set(["name", "lastReportDate"]);

export function ProjectWellsCard({ project }: { project: ProjectDetail }) {
  const reportCount = project.wells.reduce(
    (total, well) => total + well.reportCount,
    0,
  );

  const table = useTable({
    features: projectWellsTableFeatures,
    columns: projectWellsColumns,
    data: project.wells,
  });

  return (
    <OverviewCard
      title="Wells"
      meta={`${project.wells.length} wells · ${reportCount} reports`}
      actions={
        <Button size="sm">
          <PlusIcon data-icon="inline-start" />
          Add well
        </Button>
      }
    >
      <DataTable
        table={table}
        columnWidths={columnWidths}
        leftAlignedColumnIds={leftAlignedColumnIds}
        rowHeaderColumnId="name"
      />
    </OverviewCard>
  );
}
