"use client";

import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";
import { sections, useCurrentSection } from "@/components/common/nav-sections";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MainNav() {
  const current = useCurrentSection();

  return (
    <nav
      aria-label="Main"
      className="flex flex-wrap items-center gap-3 border-b px-6 pb-2"
    >
      {sections.map(({ label, icon: Icon, items }) => (
        <DropdownMenu key={label}>
          <DropdownMenuTrigger
            className={cn(
              buttonVariants({ variant: "ghost", className: "text-sm" }),
              label === current?.label && "bg-muted font-semibold",
            )}
          >
            <Icon />
            {label}
            <ChevronDownIcon className="size-3.5 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {items.map((item) => (
              <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </nav>
  );
}
