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
    // A <fieldset>/<legend> is the "correct" semantic element for a group of
    // buttons, but its box model is not resettable the way a <div>/<label>'s
    // is: it sat a few pixels off the other fields in this row no matter what
    // margin/padding was zeroed. role="group" gives assistive tech the same
    // grouping without that layout quirk.
    // biome-ignore lint/a11y/useSemanticElements: see comment above.
    <div
      role="group"
      aria-labelledby="rig-type-label"
      className="flex flex-col gap-1.5 text-sm"
    >
      <span id="rig-type-label" className="font-medium">
        Rig type
      </span>
      <div className="flex h-9 overflow-hidden rounded-md border">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value === option.value}
            onClick={() => onChange(option.value)}
            className={
              value === option.value
                ? "flex flex-1 items-center justify-center bg-foreground font-medium text-background"
                : "flex flex-1 items-center justify-center text-muted-foreground hover:bg-muted/50"
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
    </div>
  );
}
