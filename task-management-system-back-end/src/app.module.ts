import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllModules } from './allModules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { InvalidUuidExceptionFilter } from './handler';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Authorization } from './middleware';
import { UserService } from './service';
import { UserModel } from './model';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserModel]),
    AllModules,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserService,
    {
      provide: APP_FILTER,
      useClass: InvalidUuidExceptionFilter,
    },
  ],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Authorization)
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
