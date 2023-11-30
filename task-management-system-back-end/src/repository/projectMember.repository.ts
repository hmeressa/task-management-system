import { EntityRepository, Repository } from 'typeorm';
import { PermissionModel, ProjectMemberModel } from '../model';

@EntityRepository(ProjectMemberModel)
export class ProjectMemberRepository extends Repository<ProjectMemberModel> {}
