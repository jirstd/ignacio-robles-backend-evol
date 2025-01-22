import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { getModelToken } from '@nestjs/sequelize';
import { Task } from '../models/task.model';

describe('TaskService', () => {
  let service: TaskService;

  const mockTaskRepository = {
    findAll: jest.fn(),
    create: jest.fn(),
    findByPk: jest.fn(),
    destroy: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: getModelToken(Task),
          useValue: mockTaskRepository,
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all tasks', async () => {
    const tasks = [{ id: 1, title: 'Test Task' }];
    mockTaskRepository.findAll.mockResolvedValue(tasks);

    const result = await service.findAll();
    expect(result).toEqual(tasks);
    expect(mockTaskRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it('should create a new task', async () => {
    const newTask = { title: 'New Task' };
    const savedTask = { id: 1, ...newTask };
    mockTaskRepository.create.mockResolvedValue(savedTask);

    const result = await service.create(newTask);
    expect(result).toEqual(savedTask);
    expect(mockTaskRepository.create).toHaveBeenCalledWith(newTask);
  });

  it('should update a task', async () => {
    // const task = { id: 1, title: 'Updated Task' };
    const task = {
        id: 1,
        title: 'Updated Task',
        update: jest.fn().mockResolvedValue({ id: 1, title: 'Updated Task' }),
      };
    const updatedTask = { ...task, title: 'Updated Task' };
    mockTaskRepository.findByPk.mockResolvedValue(task);
    task.update = jest.fn().mockResolvedValue(updatedTask);

    const result = await service.update(1, { title: 'Updated Task' });
    expect(result).toEqual(updatedTask);
    expect(task.update).toHaveBeenCalledWith({ title: 'Updated Task' });
  });

  it('should delete a task', async () => {
    // const task = { id: 1, title: 'Test Task' };
    const task = {
        id: 1,
        title: 'Test Task',
        destroy: jest.fn(),
      };
    mockTaskRepository.findByPk.mockResolvedValue(task);
    task.destroy = jest.fn();

    await service.delete(1);
    expect(task.destroy).toHaveBeenCalled();
  });
});
