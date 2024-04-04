import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTaskController } from '../../controller';
import { UserTaskService } from '../../service';
import { UserTaskRepository } from 'src/repository';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [UserTaskController],
  providers: [UserTaskService, UserTaskRepository],
})
export class UserTaskModule {}
