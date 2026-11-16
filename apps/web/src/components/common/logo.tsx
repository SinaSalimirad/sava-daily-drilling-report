import { cn } from "cn";

// The only place that uses the logo font (font-logo).
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("font-logo text-xl text-foreground", className)}>
      SavaDailyDrillingReport
    </span>
  );
}
