import { EyeIcon, RotateCcwIcon } from "lucide-react";
import type { ArchivedProject } from "@/app/dashboard/master-data/projects/archive/_components/archived-projects-data";
import { Button } from "@/components/ui/button";

// View and Restore have no handlers yet: they need the project detail page and the
// restore endpoint of the API.
export function ArchivedProjectActions({
  project,
}: {
  project: ArchivedProject;
}) {
  return (
    <div className="flex items-center justify-center gap-1">
      <Button variant="ghost" size="icon" className="size-8">
        <EyeIcon className="size-4" />
        <span className="sr-only">View {project.name}</span>
      </Button>
      <Button variant="ghost" size="sm">
        <RotateCcwIcon data-icon="inline-start" />
        Restore
        <span className="sr-only"> {project.name}</span>
      </Button>
    </div>
  );
}
