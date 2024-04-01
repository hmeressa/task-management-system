import { TaskStatusRepository } from '../../repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from '../../controller';
import {
  ProjectMemberModel,
  ProjectModel,
  TaskModel,
  TaskStatusModel,
  UserModel,
  UserTaskModel,
} from '../../model';
import {
  MailService,
  ProjectService,
  TaskService,
  UserService,
  TaskStatusService,
} from '../../service';
import { ProjectMemberRepository } from 'src/repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TaskModel,
      ProjectModel,
      UserModel,
      UserTaskModel,
      ProjectMemberModel,
      TaskStatusModel,
      TaskStatusRepository,
    ]),
  ],
  controllers: [TaskController],
  providers: [
    TaskService,
    ProjectService,
    UserService,
    MailService,
    ProjectMemberRepository,
    TaskStatusService,
  ],
  exports: [],
})
export class TaskModule {}
