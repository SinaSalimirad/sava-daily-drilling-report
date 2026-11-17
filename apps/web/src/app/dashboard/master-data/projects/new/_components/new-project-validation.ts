import type { NewProjectFormValues } from "@/app/dashboard/master-data/projects/new/_components/new-project-data";

export type NewProjectFieldErrors = Partial<
  Record<"name" | "client" | "contractor" | "rig", string>
>;

// Only required-field checks run here. Checking the name/code against existing projects
// needs the create endpoint (it owns the source of truth) and is added once that exists.
export function getNewProjectErrors(
  values: NewProjectFormValues,
): NewProjectFieldErrors {
  const errors: NewProjectFieldErrors = {};
  if (!values.name.trim()) errors.name = "Project name is required.";
  if (!values.client.trim()) errors.client = "Client is required.";
  if (!values.contractor.trim())
    errors.contractor = "Drilling contractor is required.";
  if (!values.rig.trim()) errors.rig = "Rig name is required.";
  return errors;
}
