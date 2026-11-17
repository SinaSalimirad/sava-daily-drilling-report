import type { ProjectCreate, ProjectUpdate } from "schemas";
import { db } from "../../db";
import type { Project } from "./project.repository";
import * as projectRepository from "./project.repository";

export type ProjectServiceError =
  | { code: "NOT_FOUND"; message: string }
  | { code: "DUPLICATE_NAME"; message: string };

export type ProjectServiceResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: ProjectServiceError };

const UNIQUE_VIOLATION = "23505";

function isPgError(error: unknown, code: string): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === code
  );
}

const notFound: ProjectServiceError = {
  code: "NOT_FOUND",
  message: "Project not found.",
};
const duplicateName: ProjectServiceError = {
  code: "DUPLICATE_NAME",
  message: "A project with that name already exists.",
};

export function listProjects(): Promise<Project[]> {
  return projectRepository.findMany(db);
}

export async function getProject(
  id: string,
): Promise<ProjectServiceResult<Project>> {
  const found = await projectRepository.findById(db, id);
  if (!found) return { ok: false, error: notFound };
  return { ok: true, data: found };
}

export async function createProject(
  input: ProjectCreate,
): Promise<ProjectServiceResult<Project>> {
  try {
    const created = await projectRepository.create(db, input);
    return { ok: true, data: created };
  } catch (error) {
    if (isPgError(error, UNIQUE_VIOLATION)) {
      return { ok: false, error: duplicateName };
    }
    throw error;
  }
}

export async function updateProject(
  id: string,
  input: ProjectUpdate,
): Promise<ProjectServiceResult<Project>> {
  try {
    const updated = await projectRepository.update(db, id, input);
    if (!updated) return { ok: false, error: notFound };
    return { ok: true, data: updated };
  } catch (error) {
    if (isPgError(error, UNIQUE_VIOLATION)) {
      return { ok: false, error: duplicateName };
    }
    throw error;
  }
}

export async function deleteProject(
  id: string,
): Promise<ProjectServiceResult<{ id: string }>> {
  const removed = await projectRepository.remove(db, id);
  if (!removed) return { ok: false, error: notFound };
  return { ok: true, data: removed };
}
