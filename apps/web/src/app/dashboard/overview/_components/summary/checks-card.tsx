import { CheckIcon, InfoIcon, TriangleAlertIcon } from "lucide-react";
import {
  type CheckLevel,
  checks,
} from "@/app/dashboard/overview/_components/summary/summary-data";
import { OverviewCard } from "@/components/common/overview-card";
import { Button } from "@/components/ui/button";

// The icon and its label carry the level, so color is never the only signal.
const levelIcon: Record<
  CheckLevel,
  { icon: typeof CheckIcon; label: string; className: string }
> = {
  ok: { icon: CheckIcon, label: "Passed", className: "text-viz-good" },
  warning: {
    icon: TriangleAlertIcon,
    label: "Warning",
    className: "text-status-warning",
  },
  info: { icon: InfoIcon, label: "Notice", className: "text-muted-foreground" },
};

export function ChecksCard() {
  return (
    <OverviewCard title="Checks before submit" meta="View all">
      <ul className="flex flex-col">
        {checks.map(({ level, title, detail, action }) => {
          const { icon: Icon, label, className } = levelIcon[level];
          return (
            <li
              key={title}
              className="flex gap-3 border-t py-3 first:border-t-0 first:pt-0"
            >
              <Icon
                className={`mt-0.5 size-4 shrink-0 ${className}`}
                aria-hidden
              />
              <div>
                <p className="text-sm font-semibold">
                  <span className="sr-only">{label}: </span>
                  {title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {detail}
                  {action && (
                    <>
                      {" "}
                      <strong className="font-semibold text-foreground">
                        {action}
                      </strong>
                    </>
                  )}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto flex flex-col gap-3 border-t pt-4">
        <div className="flex gap-3">
          <Button className="h-10 flex-1">Submit report</Button>
          <Button variant="outline" className="h-10">
            Save draft
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Warnings never block. Submitting with open warnings records your
          acknowledgement.
        </p>
      </div>
    </OverviewCard>
  );
}
