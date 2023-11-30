//user.model.ts
import * as bcrypt from 'bcrypt';
import {
  Entity,
  Column,
  BeforeInsert,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { RoleModel } from './role.model';
import { BaseModel } from './base.model';
import { TaskModel } from './task.model';
import { ProjectModel } from './project.model';
import { TeamModel } from './team.model';

@Entity('users')
export class UserModel extends BaseModel {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  roleId: string;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  @ManyToOne(() => RoleModel, (role) => role.user)
  role: RoleModel;

  @ManyToOne(() => TeamModel, (team) => team.user)
  team: TeamModel;

  @OneToMany(() => ProjectModel, (projectOwner) => projectOwner.projectOwner)
  projectOwner: ProjectModel;

  @ManyToMany(() => ProjectModel, (project) => project.userMem)
  @JoinTable({
    name: 'projectMembers',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'projectId',
      referencedColumnName: 'id',
    },
  })
  public project: ProjectModel[];

  @ManyToMany(() => TaskModel, (task) => task.user)
  @JoinTable({
    name: 'userTasks',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'taskId',
      referencedColumnName: 'id',
    },
  })
  public task: TaskModel[];
}
