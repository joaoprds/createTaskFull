import { Request, Response, NextFunction } from 'express';
import Task, { ITask } from '../models/Task';

type Params = { id: string };
type Body = { title: string; description?: string; completed?: boolean };
type Query = { completed?: string };

export const createTask = async (
  req: Request<{}, {}, Body>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, description } = req.body;
    const task: ITask = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (
  req: Request<{}, {}, {}, Query>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { completed } = req.query;
    const filter = completed ? { completed: completed === 'true' } : {};
    const tasks = await Task.find(filter);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: Request<Params>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request<Params, {}, Body>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true, runValidators: true }
    );
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request<Params>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    next(error);
  }
};