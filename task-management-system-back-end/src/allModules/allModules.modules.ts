import { Module } from '@nestjs/common';
import {
  AuthModule,
  PermissionModule,
  ProjectModule,
  RoleModule,
  UserModule,
  TaskModule,
  UserTaskModule,
  RolePermissionsModule,
} from '../module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    RoleModule,
    PermissionModule,
    ProjectModule,
    TaskModule,
    RolePermissionsModule,
    UserTaskModule,
  ],
  exports: [],
})
export class AllModules {}
