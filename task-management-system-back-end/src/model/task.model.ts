// task.model.ts

import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { ProjectModel } from './project.model';
import { UserModel } from './user.model';
import { BaseModel } from './base.model';

@Entity('tasks')
export class TaskModel extends BaseModel {
  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  projectId: string;

  @ManyToOne(() => ProjectModel, (project) => project.task)
  project: ProjectModel;

  @ManyToMany(() => UserModel, (user) => user.task)
  @JoinTable({
    name: 'userTasks',
    joinColumn: {
      name: 'taskId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
  })
  public user: UserModel[];
}
