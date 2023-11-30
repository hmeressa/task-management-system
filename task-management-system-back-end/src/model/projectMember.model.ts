//rolePermission.model.ts
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserModel } from './user.model';
import { ProjectModel } from './project.model';

@Entity('projectMembers')
export class ProjectMemberModel {
  @PrimaryColumn({ primary: false })
  userId: string;

  @PrimaryColumn({ primary: false })
  projectId: string;

  @ManyToOne(() => UserModel, (user) => user.project)
  public user: UserModel;

  @ManyToOne(() => ProjectModel, (project) => project.userMem)
  public project: ProjectModel;
}
