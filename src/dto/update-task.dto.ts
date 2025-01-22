import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean, IsArray, IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @ApiPropertyOptional({ description: 'Título de la tarea', example: 'Comprar pan' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'Descripción de la tarea', example: 'Ir a la panadería y comprar pan' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Estado de la tarea', example: true })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional({ description: 'Etiquetas asociadas', type: [String], example: ['panadería', 'hogar'] })
  @IsOptional()
  @IsArray()
  tags?: string[];
}
