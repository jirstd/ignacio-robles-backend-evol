import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import { Task } from './models/task.model';


@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadModels: true,
      synchronize: true, // Sincroniza modelos automáticamente (desactívalo en producción)
    }),
    SequelizeModule.forFeature([Task]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
