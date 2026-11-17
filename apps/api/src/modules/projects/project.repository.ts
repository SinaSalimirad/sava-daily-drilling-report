import { eq } from "drizzle-orm";
import type { ProjectCreate, ProjectUpdate } from "schemas";
import type { DB, Transaction } from "../../db";
import { projects } from "../../db/schema";

export type Project = typeof projects.$inferSelect;

// Queries only: no validation, no error mapping. The service maps Postgres
// errors (23505 unique on `name`) to a response the controller can use.
export function findMany(executor: DB | Transaction) {
  return executor.select().from(projects);
}

export function findById(executor: DB | Transaction, id: string) {
  return executor
    .select()
    .from(projects)
    .where(eq(projects.id, id))
    .then((rows) => rows[0]);
}

export async function create(
  executor: DB | Transaction,
  data: ProjectCreate,
): Promise<Project> {
  const [created] = await executor.insert(projects).values(data).returning();
  // A successful single-row insert always returns that row; reaching here
  // without one means the insert API's contract changed under us.
  if (!created) throw new Error("Insert did not return the created project.");
  return created;
}

export function update(
  executor: DB | Transaction,
  id: string,
  data: ProjectUpdate,
) {
  return executor
    .update(projects)
    .set(data)
    .where(eq(projects.id, id))
    .returning()
    .then((rows) => rows[0]);
}

export function remove(executor: DB | Transaction, id: string) {
  return executor
    .delete(projects)
    .where(eq(projects.id, id))
    .returning({ id: projects.id })
    .then((rows) => rows[0]);
}
