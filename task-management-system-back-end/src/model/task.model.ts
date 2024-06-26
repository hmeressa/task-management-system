// task.model.ts

import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { ProjectModel } from './project.model';
import { UserModel } from './user.model';
import { BaseModel } from './base.model';
import { TaskStatusModel } from './taskStatus.model';

@Entity('tasks')
export class TaskModel extends BaseModel {
  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  projectId: string;

  @Column()
  statusId: string;

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
  @ManyToOne(() => TaskStatusModel, (status) => status.task)
  status: TaskStatusModel;

  public user: UserModel[];
}
