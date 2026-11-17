"use client";

import { PlusIcon } from "lucide-react";
import Link from "next/link";
import type * as React from "react";
import { useState } from "react";
import { NewProjectField } from "@/app/dashboard/master-data/projects/new/_components/new-project-field";
import { NewProjectRigTypeToggle } from "@/app/dashboard/master-data/projects/new/_components/new-project-rig-type-toggle";
import { NewProjectSidebar } from "@/app/dashboard/master-data/projects/new/_components/new-project-sidebar";
import {
  CURRENCIES,
  EMPTY_NEW_PROJECT_FORM,
  type NewProjectFormValues,
} from "@/app/dashboard/master-data/projects/new/_components/new-project-types";
import { NewProjectUnitsPicker } from "@/app/dashboard/master-data/projects/new/_components/new-project-units-picker";
import { getNewProjectErrors } from "@/app/dashboard/master-data/projects/new/_components/new-project-validation";
import { FormCard } from "@/components/common/form-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/toast";

// The create endpoint does not exist yet, so submitting only validates the required
// fields and tells the user what is still missing — the same placeholder pattern as
// the other row actions in this feature (see project-actions.tsx).
export function NewProjectForm() {
  const [values, setValues] = useState<NewProjectFormValues>(
    EMPTY_NEW_PROJECT_FORM,
  );
  const [tried, setTried] = useState(false);
  const errors = getNewProjectErrors(values);

  function setField<Key extends keyof NewProjectFormValues>(
    key: Key,
    value: NewProjectFormValues[Key],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setTried(true);
    if (Object.keys(errors).length > 0) return;

    toast.add({
      title: "Project creation needs the API",
      description:
        "This form is ready; wiring it to the create endpoint is next.",
      type: "info",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <FormCard
            title="Contract"
            description="Shown on the header of every daily report."
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <NewProjectField
                label="Project name"
                placeholder="e.g. Project A-03"
                value={values.name}
                error={tried ? errors.name : undefined}
                onChange={(event) => setField("name", event.target.value)}
              />
              <NewProjectField
                label="Project code"
                optional
                placeholder="e.g. A-03"
                help="Must be unique, archived projects included"
                value={values.code}
                onChange={(event) => setField("code", event.target.value)}
              />
              <NewProjectField
                label="Client (operator)"
                placeholder="e.g. Sava Energy"
                help="Owns the well and receives the report"
                value={values.client}
                error={tried ? errors.client : undefined}
                onChange={(event) => setField("client", event.target.value)}
              />
              <NewProjectField
                label="Drilling contractor"
                placeholder="e.g. Contractor A"
                help="Owns the rig and its equipment"
                value={values.contractor}
                error={tried ? errors.contractor : undefined}
                onChange={(event) => setField("contractor", event.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-sm">
              <span id="currency-label" className="font-medium">
                Currency
              </span>
              <Select
                value={values.currency}
                onValueChange={(value) => {
                  if (value) setField("currency", value);
                }}
              >
                <SelectTrigger
                  aria-labelledby="currency-label"
                  className="w-full sm:w-72"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CURRENCIES.map((currency) => (
                    <SelectItem key={currency.value} value={currency.value}>
                      {currency.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className="text-xs text-muted-foreground">
                Every price and cost of this project uses it
              </span>
            </div>
          </FormCard>

          <FormCard title="Rig & location">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <NewProjectField
                label="Rig name"
                placeholder="e.g. Rig A-7"
                value={values.rig}
                error={tried ? errors.rig : undefined}
                onChange={(event) => setField("rig", event.target.value)}
              />
              <NewProjectRigTypeToggle
                value={values.rigType}
                onChange={(value) => setField("rigType", value)}
              />
              <NewProjectField
                label="Field / block"
                placeholder="e.g. Block 12"
                value={values.field}
                onChange={(event) => setField("field", event.target.value)}
              />
              <NewProjectField
                label="Country"
                value={values.country}
                onChange={(event) => setField("country", event.target.value)}
              />
              <NewProjectField
                label="Rig phone"
                optional
                placeholder="Not set"
                value={values.rigPhone}
                onChange={(event) => setField("rigPhone", event.target.value)}
              />
              <NewProjectField
                label="Warehouse phone"
                optional
                placeholder="Not set"
                value={values.warehousePhone}
                onChange={(event) =>
                  setField("warehousePhone", event.target.value)
                }
              />
            </div>
          </FormCard>

          <FormCard
            title="Display units"
            description="How numbers are shown on this project. Values are stored in SI, so this can be changed later without touching data."
          >
            <NewProjectUnitsPicker
              value={values.units}
              onChange={(value) => setField("units", value)}
            />
          </FormCard>
        </div>

        <NewProjectSidebar values={values} />
      </div>

      <div className="sticky bottom-0 flex justify-end gap-2.5 bg-gradient-to-t from-background via-background/90 to-transparent py-5">
        <Button
          type="button"
          variant="outline"
          className="border-0 bg-card"
          nativeButton={false}
          render={<Link href="/dashboard/master-data/projects" />}
        >
          Cancel
        </Button>
        <Button type="submit">
          <PlusIcon data-icon="inline-start" />
          Create project
        </Button>
      </div>
    </form>
  );
}
