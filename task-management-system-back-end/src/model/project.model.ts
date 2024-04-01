// project.model.ts

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { TaskModel } from './task.model';
import { BaseModel } from './base.model';
import { UserModel } from './user.model';
@Entity('projects')
export class ProjectModel extends BaseModel {
  @Column()
  name: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column()
  isClosed: boolean = false;

  @OneToMany(() => TaskModel, (task) => task.project)
  task: TaskModel;

  @ManyToOne(() => UserModel, (projectOwner) => projectOwner.project)
  projectOwner: UserModel;

  @ManyToMany(() => UserModel, (user) => user.project)
  @JoinTable({
    name: 'projectMembers', // name of the pivot table
    joinColumn: {
      name: 'projectId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
  })
  public userMem: UserModel[];
}
