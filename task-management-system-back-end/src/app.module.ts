import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllModules } from './allModules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { InvalidUuidExceptionFilter } from './handler';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserAuthorization } from './middleware';
import { UserService } from './service';
import { UserModel } from './model';
import { TeamController } from './controller/team/team.controller';
import { TeamService } from './service/team/team.service';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserModel]),
    AllModules,
  ],
  controllers: [AppController, TeamController],
  providers: [
    AppService,
    UserService,
    {
      provide: APP_FILTER,
      useClass: InvalidUuidExceptionFilter,
    },
    TeamService,
  ],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserAuthorization)
      // .exclude('auth', 'project', {
      //   path: 'user',
      //   method: RequestMethod.POST,
      // })
      .forRoutes
      // 'user',
      // 'role',
      // 'permission',
      // // 'role-permission',
      // 'done',
      // 'to-do',
      // // 'task',
      // 'in-progress',
      ();
  }
}
