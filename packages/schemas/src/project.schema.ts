import * as z from "zod";

export const projectStatusSchema = z.enum(["Active", "Planned", "Completed"]);
export type ProjectStatus = z.infer<typeof projectStatusSchema>;

export const projectCurrencySchema = z.enum(["USD", "EUR", "IRR"]);
export type ProjectCurrency = z.infer<typeof projectCurrencySchema>;

export const projectCreateSchema = z.object({
  name: z.string().trim().min(1).max(120),
  operator: z.string().trim().min(1).max(120),
  contractor: z.string().trim().min(1).max(120),
  field: z.string().trim().min(1).max(120),
  well: z.coerce.number().positive(),
  active_well: z.coerce.number().nonnegative(),
  last_report: z.iso.date(),
  status: projectStatusSchema,
  currency: projectCurrencySchema,
});
export type ProjectCreate = z.infer<typeof projectCreateSchema>;

export const projectUpdateSchema = projectCreateSchema.partial();
export type ProjectUpdate = z.infer<typeof projectUpdateSchema>;
