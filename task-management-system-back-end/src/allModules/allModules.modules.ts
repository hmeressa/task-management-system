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
  TaskStatusModule,
  // TeamModule,
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
    TaskStatusModule,
    // TeamModule,
  ],
  exports: [],
})
export class AllModules {}
