import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTaskDto } from '../dto/create-task.dto'
import { UpdateTaskDto } from '../dto/update-task.dto';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@ApiTags('tasks')
@Controller('api/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}


  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({ status: 200, description: 'Lista de tareas.' })
  @Get()
  async getTasks(@Query() filters: any): Promise<Task[]> {
    return this.taskService.findAll(filters);
  }

//   @ApiOperation({ summary: 'Crear una nueva tarea' })
//   @ApiResponse({ status: 201, description: 'Tarea creada.' })
//   @Post()
//   async createTask(@Body() taskData: Partial<Task>): Promise<Task> {
//     return this.taskService.create(taskData);
//   }

	@ApiOperation({ summary: 'Crear una nueva tarea' })
	@ApiResponse({ status: 201, description: 'Tarea creada exitosamente.' })
	@Post()
	async createTask(@Body() createTaskDto: CreateTaskDto) {
		return this.taskService.create(createTaskDto);
	}

  // @ApiOperation({ summary: 'Actualizar una tarea' })
  // @ApiResponse({ status: 201, description: 'Tarea actualizada.' })
  // @Put(':id')
  // async updateTask(@Param('id') id: number, @Body() updates: Partial<Task>): Promise<Task> {
  //   return this.taskService.update(id, updates);
  // }

	@ApiOperation({ summary: 'Actualizar una tarea existente' })
  @ApiResponse({ status: 200, description: 'Tarea actualizada exitosamente.' })
  @Put(':id')
  async updateTask(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @ApiOperation({ summary: 'Eliminar una tarea' })
  @ApiResponse({ status: 201, description: 'Tarea eliminada.' })
  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    await this.taskService.delete(id);
  }
}

@Controller('api/tags')
export class TagController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTags(): Promise<string[]> {
    return this.taskService.getTags();
  }
}
