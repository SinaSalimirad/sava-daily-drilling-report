import {
  createColumnHelper,
  createPaginatedRowModel,
  rowPaginationFeature,
  tableFeatures,
} from "@tanstack/react-table";
import type { ReactNode } from "react";
import { ProjectActions } from "@/app/dashboard/master-data/projects/_components/project-actions";
import type {
  Project,
  ProjectStatus,
} from "@/app/dashboard/master-data/projects/_components/projects-data";
import { StatusBadge } from "@/components/common/status-badge";

// Pagination only: this table has no sorting or filtering yet. The paginated row model
// slices the rows in the browser; replace it with `manualPagination` when the API paginates.
// Keep it at module scope so the table does not rebuild its models on every render.
export const projectsTableFeatures = tableFeatures({
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
});

export const PROJECTS_DEFAULT_PAGE_SIZE = 5;
export const PROJECTS_PAGE_SIZES = [PROJECTS_DEFAULT_PAGE_SIZE, 10, 20, 50];

const statusLabels: Record<ProjectStatus, string> = {
  active: "Active",
  planned: "Planned",
  completed: "Completed",
};

function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const tone = status === "active" ? "good" : "neutral";

  return <StatusBadge tone={tone}>{statusLabels[status]}</StatusBadge>;
}

// A project can have no active well or no report yet: show a dash instead of an empty cell.
const orDash = (value: string | null): ReactNode => value ?? "—";

const helper = createColumnHelper<typeof projectsTableFeatures, Project>();

export const projectsColumns = helper.columns([
  helper.accessor("name", { header: "Project" }),
  helper.accessor("client", { header: "Client" }),
  helper.accessor("field", { header: "Field" }),
  helper.accessor("wells", { header: "Wells" }),
  helper.accessor("activeWell", {
    header: "Active well",
    cell: (info) => orDash(info.getValue()),
  }),
  helper.accessor("lastReport", {
    header: "Last report",
    cell: (info) => orDash(info.getValue()),
  }),
  helper.accessor("status", {
    header: "Status",
    cell: (info) => <ProjectStatusBadge status={info.getValue()} />,
  }),
  helper.display({
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => <ProjectActions project={row.original} />,
  }),
]);
