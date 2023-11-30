import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamDto } from 'src/dto';
import { TeamInterface } from '../../interface';
import { TeamModel } from '../../model';
import { TeamRepository } from '../../repository';

@Injectable()
export class TeamService {
  // constructor(
  //   @InjectRepository(TeamModel)
  //   private readonly teamRepository: TeamRepository,
  // ) {}
  // async createTeam(teamDto: TeamDto): Promise<any> {
  //   const team = this.teamRepository.create(teamDto);
  //   return this.teamRepository.save(team);
  // }
  // async getTeam(teamId: string): Promise<any> {
  //   return this.teamRepository.findOne({ where: { id: teamId } });
  // }
  // async getTeams(): Promise<any> {
  //   return this.teamRepository.find();
  // }
  // async getTeamByName(name: any): Promise<any> {
  //   return this.teamRepository.findOne({ where: { name: name } });
  // }
}
