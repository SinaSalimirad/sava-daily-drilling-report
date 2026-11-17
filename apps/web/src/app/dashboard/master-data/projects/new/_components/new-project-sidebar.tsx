import { InfoIcon } from "lucide-react";
import {
  CURRENCIES,
  type NewProjectFormValues,
  UNIT_PRESETS,
} from "@/app/dashboard/master-data/projects/new/_components/new-project-data";
import { FormCard } from "@/components/common/form-card";

const afterCreateSteps = [
  { title: "Add wells", detail: "the first well can be pre-spud." },
  {
    title: "Add rig equipment",
    detail: "pits, pumps, solids control.",
  },
  { title: "Build the price list", detail: "products and prices." },
  {
    title: "Start report 1",
    detail: "opening stock is entered as received.",
  },
];

function AfterYouCreateItCard() {
  return (
    <FormCard title="After you create it">
      <ol className="flex flex-col gap-2.5 text-sm text-muted-foreground">
        {afterCreateSteps.map(({ title, detail }, index) => (
          <li key={title} className="flex gap-2.5">
            <span className="font-medium text-foreground">{index + 1}.</span>
            <span>
              <strong className="font-medium text-foreground">{title}</strong> —{" "}
              {detail}
            </span>
          </li>
        ))}
      </ol>
    </FormCard>
  );
}

function previewRows(values: NewProjectFormValues) {
  const currencyLabel =
    CURRENCIES.find((currency) => currency.value === values.currency)?.value ??
    values.currency;

  return [
    { label: "Project", value: values.name || "—" },
    { label: "Code", value: values.code || "—" },
    { label: "Client", value: values.client || "—" },
    { label: "Contractor", value: values.contractor || "—" },
    { label: "Rig", value: `${values.rig || "—"} · ${values.rigType}` },
    {
      label: "Field",
      value: [values.field, values.country].filter(Boolean).join(", ") || "—",
    },
    { label: "Currency", value: currencyLabel },
    { label: "Units", value: UNIT_PRESETS[values.units].label },
    {
      label: "Report header",
      value: `${values.client || "Client"} Rep. · ${values.contractor || "Contractor"} Rep.`,
    },
  ];
}

function PreviewCard({ values }: { values: NewProjectFormValues }) {
  return (
    <FormCard title="Preview">
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
        {previewRows(values).map(({ label, value }) => (
          <div key={label} className="contents">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="font-medium">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex gap-2.5 border-t pt-4 text-xs text-muted-foreground">
        <InfoIcon className="mt-0.5 size-4 shrink-0" aria-hidden />
        <p>
          Status starts as <strong className="text-foreground">Planned</strong>.
          It becomes <strong className="text-foreground">Active</strong> when
          one of its wells is active.
        </p>
      </div>
    </FormCard>
  );
}

export function NewProjectSidebar({
  values,
}: {
  values: NewProjectFormValues;
}) {
  return (
    <aside className="flex w-full flex-col gap-4 lg:w-80 lg:shrink-0">
      <AfterYouCreateItCard />
      <PreviewCard values={values} />
    </aside>
  );
}
