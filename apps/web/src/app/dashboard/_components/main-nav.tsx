"use client";

import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import {
  getItemHref,
  type NavSection,
  sections,
  useCurrentSection,
} from "@/app/dashboard/_components/nav-sections";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SectionMenuProps = {
  section: NavSection;
  isCurrent: boolean;
};

function SectionMenu({ section, isCurrent }: SectionMenuProps) {
  const Icon = section.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        openOnHover
        className={cn(
          buttonVariants({ variant: "ghost", className: "text-sm" }),
          isCurrent && "bg-muted font-semibold",
        )}
      >
        <Icon />
        {section.label}
        <ChevronDownIcon className="size-3.5 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-max">
        {section.items.map((item) => (
          <DropdownMenuItem
            key={item}
            render={<Link href={getItemHref(section, item)} />}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function MainNav() {
  const current = useCurrentSection();

  return (
    <nav
      aria-label="Main"
      className="flex flex-wrap items-center gap-1 border-b px-10 pb-2"
    >
      {sections.map((section) => (
        <SectionMenu
          key={section.label}
          section={section}
          isCurrent={section.label === current?.label}
        />
      ))}
    </nav>
  );
}
