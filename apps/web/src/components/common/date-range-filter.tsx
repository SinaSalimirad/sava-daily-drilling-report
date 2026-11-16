"use client";

import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { DateRange } from "react-day-picker";
import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Preset = { label: string; days: number };

const defaultPreset: Preset = { label: "Last 30 Days", days: 30 };

const presets: Preset[] = [
  { label: "Last 7 Days", days: 7 },
  defaultPreset,
  { label: "Last 90 Days", days: 90 },
];

// The two triggers form one joined group: only the outer corners are rounded.
const triggerClass = (className: string) =>
  buttonVariants({
    variant: "outline",
    className: `border-0 text-sm ${className}`,
  });

const formatDay = (date: Date) =>
  date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });

// "15 Mar - 14 Apr"; a range that is still being picked has no end yet.
function formatRange({ from, to }: DateRange) {
  if (!from) return "Select dates";
  return to ? `${formatDay(from)} - ${formatDay(to)}` : formatDay(from);
}

function presetRange({ days }: Preset, today: Date): DateRange {
  const from = new Date(today);
  from.setDate(today.getDate() - days);
  return { from, to: today };
}

export function DateRangeFilter() {
  // null means the user picked a custom range in the calendar.
  const [preset, setPreset] = useState<Preset | null>(defaultPreset);
  const [custom, setCustom] = useState<DateRange>();
  // Set after mount: the date differs between the static build and the browser.
  const [today, setToday] = useState<Date>();

  useEffect(() => setToday(new Date()), []);

  const range = preset && today ? presetRange(preset, today) : custom;

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className={triggerClass("rounded-r-none")}>
          {preset?.label ?? "Custom range"}
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {presets.map((item) => (
            <DropdownMenuItem key={item.label} onClick={() => setPreset(item)}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Popover>
        <PopoverTrigger className={triggerClass("rounded-l-none")}>
          {range ? formatRange(range) : "…"}
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverContent align="end" className="w-auto p-0">
          <Calendar
            mode="range"
            numberOfMonths={2}
            defaultMonth={range?.from}
            selected={range}
            onSelect={(picked) => {
              setPreset(null);
              setCustom(picked);
            }}
            disabled={today && { after: today }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
