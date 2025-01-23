import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'], // Ajusta los niveles de log deseados
  });
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('API para gestionar tareas')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
