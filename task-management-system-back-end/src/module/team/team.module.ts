import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamController } from '../../controller';
import { TeamService } from '../../service';
import { TeamRepository } from '../../repository';
import { TeamModel } from '../../model';

@Module({
  imports: [TypeOrmModule.forFeature([TeamModel])],
  controllers: [TeamController],
  providers: [TeamService, TeamRepository],
  exports: [],
})
export class TeamModule {}
