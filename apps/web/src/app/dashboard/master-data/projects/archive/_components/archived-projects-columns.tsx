import { createColumnHelper, tableFeatures } from "@tanstack/react-table";
import { ArchivedProjectActions } from "@/app/dashboard/master-data/projects/archive/_components/archived-project-actions";
import type { ArchivedProject } from "@/app/dashboard/master-data/projects/archive/_components/archived-projects-data";

// Core features only: the list is short and the search box filters the data itself.
// Keep it at module scope so the table does not rebuild its models on every render.
export const archivedProjectsTableFeatures = tableFeatures({});

const helper = createColumnHelper<
  typeof archivedProjectsTableFeatures,
  ArchivedProject
>();

export const archivedProjectsColumns = helper.columns([
  helper.accessor("name", { header: "Project" }),
  helper.accessor("client", { header: "Client" }),
  helper.accessor("field", { header: "Field" }),
  helper.accessor("rig", {
    header: "Rig",
    cell: (info) => (
      <span className="text-muted-foreground">{info.getValue()}</span>
    ),
  }),
  helper.accessor("wells", { header: "Wells" }),
  helper.accessor("reports", { header: "Reports" }),
  helper.accessor("lastReport", { header: "Last report" }),
  helper.accessor("archivedOn", { header: "Archived on" }),
  helper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ArchivedProjectActions project={row.original} />,
  }),
]);
