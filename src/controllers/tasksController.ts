import type { Request, Response } from 'express';

export type TaskStatus = 'Todo' | 'In Progress' | 'Done';

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export const tasks: Task[] = [];
let nextTaskId = 1;

export function getTasks(_req: Request, res: Response) {
  return res.json(tasks);
}

export function createTask(req: Request, res: Response) {
  const { title, status = 'Todo' } = req.body as {
    title?: string;
    status?: TaskStatus;
  };

  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }

  const task: Task = {
    id: nextTaskId,
    title,
    status,
  };

  nextTaskId += 1;
  tasks.push(task);

  return res.status(201).json(task);
}

export function updateTask(req: Request, res: Response) {
  const id = Number(req.params.id);
  const task = tasks.find((currentTask) => currentTask.id === id);

  if (!task) {
    return res.status(404).json({ error: 'task not found' });
  }

  const { title, status } = req.body as {
    title?: string;
    status?: TaskStatus;
  };

  if (title !== undefined) {
    task.title = title;
  }

  if (status !== undefined) {
    task.status = status;
  }

  return res.json(task);
}
