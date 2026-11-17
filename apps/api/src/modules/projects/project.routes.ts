import { Elysia } from "elysia";
import { projectCreateSchema, projectUpdateSchema } from "schemas";
import * as z from "zod";
import * as projectService from "./project.service";

const idParamsSchema = z.object({ id: z.uuid() });

// Maps a service error to the status/body an HTTP client sees, in one place
// so every route stays consistent: { data } on success, { code, message } on failure.
const errorStatus: Record<projectService.ProjectServiceError["code"], number> =
  {
    NOT_FOUND: 404,
    DUPLICATE_NAME: 409,
  };

export const projectRoutes = new Elysia({ prefix: "/projects" })
  .get("/", async () => ({ data: await projectService.listProjects() }))
  .get(
    "/:id",
    async ({ params, status }) => {
      const result = await projectService.getProject(params.id);
      if (!result.ok)
        return status(errorStatus[result.error.code], result.error);
      return { data: result.data };
    },
    { params: idParamsSchema },
  )
  .post(
    "/",
    async ({ body, status }) => {
      const result = await projectService.createProject(body);
      if (!result.ok)
        return status(errorStatus[result.error.code], result.error);
      return status(201, { data: result.data });
    },
    { body: projectCreateSchema },
  )
  .patch(
    "/:id",
    async ({ params, body, status }) => {
      const result = await projectService.updateProject(params.id, body);
      if (!result.ok)
        return status(errorStatus[result.error.code], result.error);
      return { data: result.data };
    },
    { params: idParamsSchema, body: projectUpdateSchema },
  )
  .delete(
    "/:id",
    async ({ params, status }) => {
      const result = await projectService.deleteProject(params.id);
      if (!result.ok)
        return status(errorStatus[result.error.code], result.error);
      return { data: result.data };
    },
    { params: idParamsSchema },
  );
