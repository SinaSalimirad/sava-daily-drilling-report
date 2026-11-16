"use client";

import { ChevronDownIcon, type LucideIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// One option, shown as: title (medium) highlight (bold) · detail (muted).
export type PillOption = {
  id: string;
  title: string;
  highlight?: string;
  detail?: string;
};

type SelectPillProps = {
  options: PillOption[];
  value: string;
  onChange: (id: string) => void;
  icon?: LucideIcon;
};

function OptionLabel({ title, highlight, detail }: PillOption) {
  return (
    <>
      <span className="font-medium">{title}</span>
      {highlight && <span className="font-semibold">{highlight}</span>}
      {detail && <span className="text-muted-foreground">· {detail}</span>}
    </>
  );
}

export function SelectPill({
  options,
  value,
  onChange,
  icon: Icon,
}: SelectPillProps) {
  const selected = options.find((option) => option.id === value);
  if (!selected) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonVariants({
          variant: "outline",
          className: "rounded-full border-0 bg-background text-sm",
        })}
      >
        {Icon && <Icon />}
        <OptionLabel {...selected} />
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="max-h-60">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.id}
            onClick={() => onChange(option.id)}
            className="gap-1.5"
          >
            <OptionLabel {...option} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
