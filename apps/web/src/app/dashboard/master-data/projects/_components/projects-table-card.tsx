import {
  type Project,
  type ProjectStatus,
  projects,
} from "@/app/dashboard/master-data/projects/_components/projects-data";
import { OverviewCard } from "@/components/common/overview-card";
import { StatusBadge } from "@/components/common/status-badge";

const headerClass =
  "pb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase";

const statusLabels: Record<ProjectStatus, string> = {
  active: "Active",
  planned: "Planned",
  completed: "Completed",
};

function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const tone = status === "active" ? "success" : "neutral";

  return <StatusBadge tone={tone}>{statusLabels[status]}</StatusBadge>;
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <tr className="border-t text-left">
      <th scope="row" className="py-3 font-semibold">
        {project.name}
      </th>
      <td className="py-3">{project.client}</td>
      <td className="py-3">{project.location}</td>
      <td className="py-3 text-right tabular-nums">{project.wells}</td>
      <td className="py-3">{project.startDate}</td>
      <td className="py-3">
        <ProjectStatusBadge status={project.status} />
      </td>
    </tr>
  );
}

export function ProjectsTableCard() {
  return (
    <OverviewCard title="All projects" meta={`${projects.length} projects`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] text-sm">
          <thead>
            <tr className="text-left">
              <th scope="col" className={headerClass}>
                Project
              </th>
              <th scope="col" className={headerClass}>
                Client
              </th>
              <th scope="col" className={headerClass}>
                Location
              </th>
              <th scope="col" className={`${headerClass} text-right`}>
                Wells
              </th>
              <th scope="col" className={headerClass}>
                Start date
              </th>
              <th scope="col" className={headerClass}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      </div>
    </OverviewCard>
  );
}
