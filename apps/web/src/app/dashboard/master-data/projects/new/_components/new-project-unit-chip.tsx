import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// A read-only tag, except in Custom mode: there it is a trigger for the unit's
// own options (its Oil Field and SI unit). A quantity with only one option
// (Depth's "m", for both systems) stays read-only even in Custom mode.
export function NewProjectUnitChip({
  quantity,
  unit,
  options,
  onChange,
}: {
  quantity: string;
  unit: string;
  options?: string[];
  onChange?: (unit: string) => void;
}) {
  if (!options || options.length < 2) {
    return (
      <span className="flex gap-1.5 rounded-md bg-muted/40 px-2.5 py-1 text-xs">
        <em className="text-muted-foreground not-italic">{quantity}</em>
        <b className="font-medium">{unit}</b>
      </span>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs bg-muted/40">
        <em className="text-muted-foreground not-italic">{quantity}</em>
        <b className="font-medium">{unit}</b>
        <ChevronDownIcon className="size-3 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-max min-w-24">
        {options.map((option) => (
          <DropdownMenuItem key={option} onClick={() => onChange?.(option)}>
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
