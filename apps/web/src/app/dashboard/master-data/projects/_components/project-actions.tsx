import { EllipsisIcon, EyeIcon } from "lucide-react";
import type { Project } from "@/app/dashboard/master-data/projects/_components/projects-data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// The row menu. Edit and Delete have no handlers yet: add them together with the
// edit sheet and the delete dialog, and keep those outside the menu content
// (the content unmounts when the menu closes, which would close them too).
export function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-center gap-1">
      <Button variant="ghost" size="icon" className="size-8">
        <EyeIcon className="size-4" />
        <span className="sr-only">View {project.name}</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" size="icon" className="size-8" />}
        >
          <span className="sr-only">Open menu for {project.name}</span>
          <EllipsisIcon className="size-4" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Project actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit project</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Delete project
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
