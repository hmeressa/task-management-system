// team.model.ts

import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { UserModel } from './user.model';

@Entity('teams')
export class TeamModel extends BaseModel {
  @Column()
  name: string;

  @OneToMany(() => UserModel, (user) => user.team)
  user: UserModel;
}
