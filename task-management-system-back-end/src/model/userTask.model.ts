//userTask.model.ts
import { UserModel } from './user.model';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { TaskModel } from './task.model';

@Entity('userTasks')
export class UserTaskModel {
  @PrimaryColumn({ primary: false })
  userId: string;

  @PrimaryColumn({ primary: false })
  taskId: string;

  @ManyToOne(() => UserModel, (user) => user.task)
  public user: UserModel;

  @ManyToOne(() => TaskModel, (task) => task.user)
  public task: TaskModel;
}
