import { BellIcon, MoonIcon, SearchIcon } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { ProjectSwitcher } from "@/components/common/project-switcher";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-6 py-4 mb-4">
      <Logo />

      <div className="flex items-center gap-4">
        <ProjectSwitcher />

        <Separator orientation="vertical" className="h-6 self-center" />

        <div className="relative">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="h-9 w-64 rounded-xl pl-9"
          />
        </div>

        <Separator orientation="vertical" className="h-6 self-center" />

        <BellIcon className="size-4.5" />
        <MoonIcon className="size-4.5" />

        <Avatar>
          <AvatarFallback>SS</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
