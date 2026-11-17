import { notFound } from "next/navigation";
import { DashboardBreadcrumb } from "@/app/dashboard/_components/dashboard-breadcrumb";
import { ProjectContractCard } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-contract-card";
import { getProjectDetail } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";
import { ProjectDetailHeader } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-header";
import { ProjectDisplayUnitsCard } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-display-units-card";
import { ProjectInfoStrip } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-info-strip";
import { ProjectNowCard } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-now-card";
import { ProjectRecordCard } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-record-card";
import { ProjectRigEquipmentCard } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-rig-equipment-card";
import { ProjectWellsCard } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-wells-card";

// Master Data / Projects / <project name>. The breadcrumb takes "Master Data / Projects"
// from the URL and the leaf from the project itself, the same way the Archive page does.
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = getProjectDetail(projectId);
  if (!project) notFound();

  return (
    <main className="flex flex-1 flex-col gap-4 px-10 py-3">
      <DashboardBreadcrumb leaf={project.name} />
      <ProjectDetailHeader project={project} />
      <ProjectInfoStrip project={project} />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <ProjectWellsCard project={project} />
          <ProjectContractCard project={project} />
          <ProjectDisplayUnitsCard project={project} />
        </div>

        <aside className="flex w-full flex-col gap-4 lg:w-80 lg:shrink-0">
          <ProjectNowCard project={project} />
          <ProjectRigEquipmentCard project={project} />
          <ProjectRecordCard project={project} />
        </aside>
      </div>
    </main>
  );
}
