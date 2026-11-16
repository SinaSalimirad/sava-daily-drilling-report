import { cn } from "cn";
import {
  ChartNoAxesCombinedIcon,
  ChevronDownIcon,
  CreditCardIcon,
  FlaskConicalIcon,
  LayoutDashboardIcon,
  LifeBuoyIcon,
  type LucideIcon,
  MegaphoneIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavSection = {
  label: string;
  icon: LucideIcon;
  items: string[];
};

// Placeholder items: replace them with real pages when the routes exist.
const sections: NavSection[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboardIcon,
    items: ["Overview", "Reports"],
  },
  {
    label: "Visitor Analytics",
    icon: ChartNoAxesCombinedIcon,
    items: ["Traffic", "Sources"],
  },
  { label: "Leads", icon: UsersIcon, items: ["All leads", "Import"] },
  { label: "Campaign", icon: MegaphoneIcon, items: ["Active", "Archived"] },
  {
    label: "A/B Testing Suite",
    icon: FlaskConicalIcon,
    items: ["Experiments", "Results"],
  },
  { label: "Payment", icon: CreditCardIcon, items: ["Invoices", "Billing"] },
  {
    label: "Settings & Integrations",
    icon: SettingsIcon,
    items: ["General", "Integrations"],
  },
  {
    label: "Support",
    icon: LifeBuoyIcon,
    items: ["Help center", "Contact us"],
  },
];

export function MainNav({ active }: { active?: string }) {
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
              label === active && "bg-muted font-semibold",
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
