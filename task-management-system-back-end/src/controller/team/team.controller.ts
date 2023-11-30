import { Controller, NotFoundException, Post } from '@nestjs/common';
import { TeamDto } from '../../dto';
import { TeamService } from '../../service';

@Controller('team')
export class TeamController {
  // constructor(private readonly teamService: TeamService) {}
  // @Post()
  // async createTeams(teamDto: TeamDto): Promise<any> {
  //   const name = this.teamService.getTeamByName(teamDto.name);
  //   if (name) {
  //     return new NotFoundException({
  //       message: 'Something bad happened',
  //       error: 'Team name is already exist',
  //     });
  //   }
  //   return this.teamService.createTeam(teamDto);
  // }
  // async getTeam(teamId: string): Promise<any> {}
  // async getTeams(): Promise<any> {}
}
