import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from '../services/task.service';

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;

  const mockTaskService = {
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: mockTaskService,
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all tasks', async () => {
    const tasks = [{ id: 1, title: 'Test Task' }];
    mockTaskService.findAll.mockResolvedValue(tasks);

    const result = await controller.getTasks({});
    expect(result).toEqual(tasks);
    expect(mockTaskService.findAll).toHaveBeenCalledTimes(1);
  });

  it('should create a task', async () => {
    const newTask = { title: 'New Task', completed: false };
    const createdTask = { id: 1, ...newTask };
    mockTaskService.create.mockResolvedValue(createdTask);

    const result = await controller.createTask(newTask);
    expect(result).toEqual(createdTask);
    expect(mockTaskService.create).toHaveBeenCalledWith(newTask);
  });

  it('should update a task', async () => {
    const updatedTask = { id: 1, title: 'Updated Task' };
    mockTaskService.update.mockResolvedValue(updatedTask);

    const result = await controller.updateTask(1, { title: 'Updated Task' });
    expect(result).toEqual(updatedTask);
    expect(mockTaskService.update).toHaveBeenCalledWith(1, { title: 'Updated Task' });
  });

  it('should delete a task', async () => {
    mockTaskService.delete.mockResolvedValue(undefined);

    await controller.deleteTask(1);
    expect(mockTaskService.delete).toHaveBeenCalledWith(1);
  });
});
