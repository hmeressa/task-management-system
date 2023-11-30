import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from '../../controller';
import {
  ProjectMemberModel,
  ProjectModel,
  TaskModel,
  UserModel,
  UserTaskModel,
} from '../../model';
import {
  MailService,
  ProjectService,
  TaskService,
  UserService,
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
    ]),
  ],
  controllers: [TaskController],
  providers: [
    TaskService,
    ProjectService,
    UserService,
    MailService,
    ProjectMemberRepository,
  ],
  exports: [],
})
export class TaskModule {}
