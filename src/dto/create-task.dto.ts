import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsBoolean, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ description: 'Título de la tarea' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Descripción de la tarea', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Estado de la tarea', default: false })
  @IsBoolean()
  completed: boolean;

  @ApiProperty({ description: 'Etiquetas asociadas', type: [String], required: false })
  @IsOptional()
  @IsArray()
  tags?: string[];
}
