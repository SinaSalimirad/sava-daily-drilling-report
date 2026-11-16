import { BellIcon, MoonIcon, SearchIcon } from "lucide-react";
import { ProjectSwitcher } from "@/app/dashboard/_components/project-switcher";
import { Logo } from "@/components/common/logo";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function DashboardHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-10 py-4">
      <Logo />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <ProjectSwitcher />

        <Separator
          orientation="vertical"
          className="h-6 data-vertical:self-center max-md:hidden"
        />

        <div className="relative">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="h-9 w-48 pl-9 sm:w-64"
          />
        </div>

        <Separator
          orientation="vertical"
          className="h-6 data-vertical:self-center max-md:hidden"
        />

        <Avatar>
          <AvatarFallback>SS</AvatarFallback>
        </Avatar>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <BellIcon />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Toggle theme">
            <MoonIcon />
          </Button>
        </div>
      </div>
    </header>
  );
}
