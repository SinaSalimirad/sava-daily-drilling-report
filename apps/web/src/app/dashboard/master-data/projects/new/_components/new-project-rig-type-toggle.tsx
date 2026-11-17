import type { RigType } from "@/app/dashboard/master-data/projects/new/_components/new-project-types";

const options: { value: RigType; label: string }[] = [
  { value: "onshore", label: "Onshore" },
  { value: "offshore", label: "Offshore" },
];

export function NewProjectRigTypeToggle({
  value,
  onChange,
}: {
  value: RigType;
  onChange: (value: RigType) => void;
}) {
  return (
    <fieldset className="m-0 flex flex-col gap-1.5 border-0 p-0 text-sm">
      <legend className="p-0 font-medium">Rig type</legend>
      <div className="flex h-9 overflow-hidden rounded-md border">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value === option.value}
            onClick={() => onChange(option.value)}
            className={
              value === option.value
                ? "flex-1 bg-foreground font-medium text-background"
                : "flex-1 text-muted-foreground hover:bg-muted/50"
            }
          >
            {option.label}
          </button>
        ))}
      </div>
      <span className="text-xs text-muted-foreground">
        {value === "offshore"
          ? "Every well will ask for water depth"
          : "Wells will not ask for water depth"}
      </span>
    </fieldset>
  );
}
