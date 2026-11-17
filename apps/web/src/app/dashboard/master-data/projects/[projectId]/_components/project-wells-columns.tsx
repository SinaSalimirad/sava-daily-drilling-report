import { createColumnHelper, tableFeatures } from "@tanstack/react-table";
import type { ReactNode } from "react";
import { ProjectStatusBadge } from "@/app/dashboard/master-data/projects/_components/projects-columns";
import type {
  ProjectWell,
  ReportSubmissionState,
} from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";
import { StatusBadge } from "@/components/common/status-badge";

// Core features only: a project's own well list is short and unpaginated.
// Keep it at module scope so the table does not rebuild its models on every render.
export const projectWellsTableFeatures = tableFeatures({});

const reportStateLabels: Record<ReportSubmissionState, string> = {
  submitted: "Submitted",
  draft: "Draft",
};

function ReportStateBadge({ state }: { state: ReportSubmissionState }) {
  const tone = state === "submitted" ? "good" : "warning";

  return <StatusBadge tone={tone}>{reportStateLabels[state]}</StatusBadge>;
}

// A well can be pre-spud or have no report yet: show a dash instead of an empty cell.
const orDash = (value: string | number | null): ReactNode => value ?? "—";

const helper = createColumnHelper<
  typeof projectWellsTableFeatures,
  ProjectWell
>();

export const projectWellsColumns = helper.columns([
  helper.accessor("name", { header: "Well" }),
  helper.accessor("type", { header: "Type" }),
  helper.accessor("status", {
    header: "Status",
    cell: (info) => <ProjectStatusBadge status={info.getValue()} />,
  }),
  helper.accessor("spudDate", {
    header: "Spud",
    cell: (info) => orDash(info.getValue()),
  }),
  helper.accessor("reportCount", { header: "Reports" }),
  helper.accessor("lastReportDate", {
    header: "Last report",
    cell: (info) => {
      const { lastReportDate, lastReportState } = info.row.original;
      if (!lastReportDate || !lastReportState) return "—";

      return (
        <span className="flex items-center justify-center gap-2">
          {lastReportDate}
          <ReportStateBadge state={lastReportState} />
        </span>
      );
    },
  }),
]);
