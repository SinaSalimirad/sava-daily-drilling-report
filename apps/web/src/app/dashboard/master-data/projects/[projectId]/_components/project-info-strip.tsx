import type { ProjectDetail } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";
import { StatusBadge } from "@/components/common/status-badge";

const rigTypeLabels: Record<ProjectDetail["rigType"], string> = {
  onshore: "Onshore",
  offshore: "Offshore",
};

// The six-column identity strip at the top of the project page: client,
// contractor, rig and the settings that shape how every report of this
// project is read (field, currency, units).
export function ProjectInfoStrip({ project }: { project: ProjectDetail }) {
  const columns: { label: string; value: React.ReactNode }[] = [
    { label: "Client", value: project.client },
    { label: "Contractor", value: project.contractor },
    {
      label: "Rig",
      value: (
        <span className="flex items-center gap-2">
          {project.rig}
          <StatusBadge>{rigTypeLabels[project.rigType]}</StatusBadge>
        </span>
      ),
    },
    { label: "Field", value: `${project.field}, ${project.country}` },
    { label: "Currency", value: project.currency },
    { label: "Units", value: project.unitsLabel },
  ];

  return (
    <div className="grid grid-cols-2 divide-y rounded-2xl border bg-card shadow-xs sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-6">
      {columns.map((column) => (
        <div key={column.label} className="flex flex-col gap-1 px-5 py-4">
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {column.label}
          </span>
          <span className="truncate font-medium">{column.value}</span>
        </div>
      ))}
    </div>
  );
}
