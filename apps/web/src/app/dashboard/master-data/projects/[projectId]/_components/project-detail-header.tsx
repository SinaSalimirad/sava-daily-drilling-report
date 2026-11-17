import {
  ArchiveIcon,
  CheckIcon,
  EllipsisIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import { ProjectStatusBadge } from "@/app/dashboard/master-data/projects/_components/projects-columns";
import type { ProjectDetail } from "@/app/dashboard/master-data/projects/[projectId]/_components/project-detail-data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// The title row: name, status, a one-line identity, and the project-level actions.
// Like `ProjectActions`, none of the buttons has a handler yet — add them together
// with the edit sheet and the archive/delete dialogs.
export function ProjectDetailHeader({ project }: { project: ProjectDetail }) {
  return (
    <div className="flex flex-wrap items-start gap-3">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2.5">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <ProjectStatusBadge status={project.status} />
        </div>
        <p className="text-sm text-muted-foreground">
          {project.code} · {project.client} · {project.field}
        </p>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline" className="border-0 bg-card">
          <CheckIcon data-icon="inline-start" />
          Current project
        </Button>
        <Button variant="outline" className="border-0 bg-card">
          <PencilIcon data-icon="inline-start" />
          Edit
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="border-0 bg-card"
              />
            }
          >
            <EllipsisIcon />
            <span className="sr-only">Open menu for {project.name}</span>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem>
              <ArchiveIcon />
              Archive project
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Trash2Icon />
              Delete project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
