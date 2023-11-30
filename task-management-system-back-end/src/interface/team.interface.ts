import { TeamDto } from '../dto';

export interface TeamInterface {
  createTeam(teamDto: TeamDto): Promise<any>;
  getTeam(teamId: string): Promise<any>;
  getTeams(): Promise<any>;
  getTeamByName(name: any): Promise<any>;
}
