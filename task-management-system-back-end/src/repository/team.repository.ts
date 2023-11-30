import { EntityRepository, Repository } from 'typeorm';
import { TeamModel } from '../model';

@EntityRepository(TeamModel)
export class TeamRepository extends Repository<TeamModel> {}
