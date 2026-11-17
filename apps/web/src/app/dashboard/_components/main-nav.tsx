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
import { useVisibleCount } from "@/app/dashboard/_components/use-visible-count";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const triggerClass = cn(
  buttonVariants({ variant: "ghost", className: "text-sm" }),
  "shrink-0",
);

// The line sits on the nav's bottom border (pb-2 = 8px, plus 2px lower).
const currentTriggerClass =
  "relative bg-muted font-semibold after:absolute after:inset-x-2 after:-bottom-2.5 after:h-0.5 after:rounded-full after:bg-series-1";

// The active section inside the "More" menu: a bold label with a line on its left.
const currentSubTriggerClass =
  "relative font-semibold before:absolute before:inset-y-1 before:left-0.5 before:w-0.5 before:rounded-full before:bg-series-1";

// "More" sits at the right end of the row, after a thin separator. The hidden copy
// of the row uses the same classes, so the measured width includes the separator.
const moreGroupClass = "flex shrink-0 items-center gap-1";
const separatorClass = "mr-1 h-5 w-px bg-border";

function SectionItemLinks({ section }: { section: NavSection }) {
  return section.items.map((item) => (
    <DropdownMenuItem
      key={item}
      render={<Link href={getItemHref(section, item)} />}
    >
      {item}
    </DropdownMenuItem>
  ));
}

function SectionMenu({
  section,
  isCurrent,
}: {
  section: NavSection;
  isCurrent: boolean;
}) {
  const Icon = section.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        openOnHover
        className={cn(triggerClass, isCurrent && currentTriggerClass)}
      >
        <Icon />
        {section.label}
        <ChevronDownIcon className="size-3.5 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-max">
        <SectionItemLinks section={section} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// The sections that do not fit in the row: each one opens its own sub menu.
function MoreMenu({
  hiddenSections,
  currentLabel,
}: {
  hiddenSections: NavSection[];
  currentLabel: string | undefined;
}) {
  const hasCurrent = hiddenSections.some(
    (section) => section.label === currentLabel,
  );

  return (
    <div className={cn(moreGroupClass, "ml-auto")}>
      <span aria-hidden className={separatorClass} />
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(triggerClass, hasCurrent && currentTriggerClass)}
        >
          More
          <ChevronDownIcon className="size-3.5 text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-max">
          {hiddenSections.map((section) => {
            const Icon = section.icon;
            return (
              <DropdownMenuSub key={section.label}>
                <DropdownMenuSubTrigger
                  showChevron={false}
                  className={cn(
                    section.label === currentLabel && currentSubTriggerClass,
                  )}
                >
                  <Icon />
                  {section.label}
                </DropdownMenuSubTrigger>
                {/* "More" is at the right edge of the page: open to the left, not over the parent menu. */}
                <DropdownMenuSubContent side="left" sideOffset={8}>
                  <SectionItemLinks section={section} />
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// An invisible copy of the row, only used to measure the widths (bold = the widest state).
function MeasureRow({ measureRef }: { measureRef: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={measureRef}
      aria-hidden
      className="pointer-events-none invisible absolute flex h-0 w-max gap-1 overflow-hidden"
    >
      {sections.map(({ label, icon: Icon }) => (
        <span key={label} className={cn(triggerClass, "font-semibold")}>
          <Icon />
          {label}
          <ChevronDownIcon className="size-3.5" />
        </span>
      ))}
      <div className={moreGroupClass}>
        <span className={separatorClass} />
        <span className={cn(triggerClass, "font-semibold")}>
          More
          <ChevronDownIcon className="size-3.5" />
        </span>
      </div>
    </div>
  );
}

export function MainNav() {
  const current = useCurrentSection();
  const { containerRef, measureRef, visibleCount } = useVisibleCount(
    sections.length,
  );
  const visibleSections = sections.slice(0, visibleCount);
  const hiddenSections = sections.slice(visibleCount);

  return (
    <nav aria-label="Main" className="relative border-b px-10 pb-2">
      <div ref={containerRef} className="flex items-center gap-1">
        {visibleSections.map((section) => (
          <SectionMenu
            key={section.label}
            section={section}
            isCurrent={section.label === current?.label}
          />
        ))}
        {hiddenSections.length > 0 && (
          <MoreMenu
            hiddenSections={hiddenSections}
            currentLabel={current?.label}
          />
        )}
      </div>
      <MeasureRow measureRef={measureRef} />
    </nav>
  );
}
