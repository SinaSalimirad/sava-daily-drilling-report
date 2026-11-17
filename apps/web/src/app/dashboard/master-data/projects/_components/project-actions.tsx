import {
  ArchiveIcon,
  CheckIcon,
  EllipsisIcon,
  EyeIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
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

// The row actions: a view button and a menu. Only the view button and "View details" go
// to the project detail page; the rest has no handler yet. Add them together with the
// edit sheet and the archive and delete dialogs, and render those dialogs outside the
// menu content (it unmounts when the menu closes, which would close them too).
export function ProjectActions({ project }: { project: Project }) {
  const detailHref = `/dashboard/master-data/projects/${project.id}`;

  return (
    <div className="flex items-center justify-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="size-8"
        nativeButton={false}
        render={<Link href={detailHref} />}
      >
        <EyeIcon />
        <span className="sr-only">View {project.name}</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" size="icon" className="size-8" />}
        >
          <EllipsisIcon />
          <span className="sr-only">Open menu for {project.name}</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Project actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <CheckIcon />
              Set as current
            </DropdownMenuItem>
            <DropdownMenuItem render={<Link href={detailHref} />}>
              <EyeIcon />
              View details
            </DropdownMenuItem>

            <DropdownMenuItem>
              <PencilIcon />
              Edit project
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArchiveIcon />
              Archive project
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {/* Delete is apart from the safe actions, and red, so it is not clicked by mistake. */}
          <DropdownMenuItem variant="destructive">
            <Trash2Icon />
            Delete project
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
