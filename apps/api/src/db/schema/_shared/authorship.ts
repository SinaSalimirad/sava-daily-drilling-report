import { uuid } from "drizzle-orm/pg-core";
import { user } from "../user.schema";

// Kept out of columns.ts: that module has no table of its own and every table
// imports it, so it must never import a specific table back (a cycle between
// columns.ts and user.schema.ts broke `id`/`timestamps` at module load).
// Spread into a table: pgTable('wells', { ...id, ...timestamps, ...authorship })
export const authorship = {
  createdBy: uuid("created_by").references(() => user.id),
  updatedBy: uuid("updated_by").references(() => user.id),
};
