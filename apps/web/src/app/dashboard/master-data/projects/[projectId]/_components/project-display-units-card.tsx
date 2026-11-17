import type { ProjectDetail } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";
import { NewProjectUnitChip } from "@/app/dashboard/master-data/projects/new/_components/new-project-unit-chip";
import { FormCard } from "@/components/common/form-card";

export function ProjectDisplayUnitsCard({
  project,
}: {
  project: ProjectDetail;
}) {
  return (
    <FormCard
      title="Display units"
      action={
        <span className="text-xs text-muted-foreground">
          {project.unitsLabel} preset
        </span>
      }
    >
      <div className="flex flex-wrap gap-2">
        {project.unitChips.map(([quantity, unit]) => (
          <NewProjectUnitChip key={quantity} quantity={quantity} unit={unit} />
        ))}
      </div>
    </FormCard>
  );
}
