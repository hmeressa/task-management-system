import { EntityRepository, Repository } from 'typeorm';
import { UserTaskModel } from '../model';

@EntityRepository(UserTaskModel)
export class UserTaskRepository extends Repository<UserTaskModel> {}
