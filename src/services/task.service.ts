import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from '../models/task.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private readonly taskModel: typeof Task,
  ) {}

  async findAll(filters?: any): Promise<Task[]> {
    return this.taskModel.findAll({ where: filters });
  }

  async create(taskData: Partial<Task>): Promise<Task> {
    return this.taskModel.create(taskData);
  }

  async update(id: number, updates: Partial<Task>): Promise<Task> {
    const task = await this.taskModel.findByPk(id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task.update(updates);
  }

  async delete(id: number): Promise<void> {
    const task = await this.taskModel.findByPk(id);
    if (!task) {
      throw new Error('Task not found');
    }
    await task.destroy();
  }

  async getTags(): Promise<string[]> {
    const tasks = await this.taskModel.findAll();
    const tags = tasks.flatMap((task) => task.tags);
    return [...new Set(tags)];
  }
}
