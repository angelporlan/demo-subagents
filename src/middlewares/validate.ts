import type { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const taskStatusSchema = z.enum(['Todo', 'In Progress', 'Done']);

export const createTaskSchema = z.object({
  title: z.string().trim().min(1, 'title is required'),
  status: taskStatusSchema.optional(),
});

export function validateCreateTask(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const result = createTaskSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: 'Invalid request body',
      details: result.error.flatten().fieldErrors,
    });
  }

  req.body = result.data;
  return next();
}
