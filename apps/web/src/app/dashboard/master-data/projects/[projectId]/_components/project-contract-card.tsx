import { PencilIcon } from "lucide-react";
import type { ProjectDetail } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";
import { FormCard } from "@/components/common/form-card";
import { Button } from "@/components/ui/button";

const rigTypeLabels: Record<ProjectDetail["rigType"], string> = {
  onshore: "Onshore",
  offshore: "Offshore",
};

function contractRows(project: ProjectDetail) {
  return [
    { label: "Project name", value: project.name },
    { label: "Project code", value: project.code },
    { label: "Client (operator)", value: project.client },
    { label: "Drilling contractor", value: project.contractor },
    {
      label: "Rig",
      value: `${project.rig} · ${rigTypeLabels[project.rigType]}`,
    },
    { label: "Field / country", value: `${project.field}, ${project.country}` },
    { label: "Currency", value: project.currency },
    { label: "Report header", value: project.reportHeader },
  ];
}

export function ProjectContractCard({ project }: { project: ProjectDetail }) {
  return (
    <FormCard
      title="Contract & rig"
      action={
        <Button variant="outline" size="sm" className="border-0 bg-card">
          <PencilIcon data-icon="inline-start" />
          Edit
        </Button>
      }
    >
      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 text-sm">
        {contractRows(project).map((row) => (
          <div key={row.label} className="contents">
            <dt className="text-muted-foreground">{row.label}</dt>
            <dd className="text-right font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>
    </FormCard>
  );
}
