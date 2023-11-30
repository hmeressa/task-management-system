import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectMemberModel, ProjectModel, UserModel } from '../../model';
import { ProjectController } from '../../controller';
import { ProjectService, UserService } from '../../service';
import { ProjectMemberRepository, UserRepository } from 'src/repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectModel, ProjectMemberModel, UserModel]),
  ],
  controllers: [ProjectController],
  providers: [
    ProjectService,
    ProjectMemberRepository,
    UserService,
    UserRepository,
  ],
})
export class ProjectModule {}
