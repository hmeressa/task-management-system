import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllModules } from './allModules';
import { InvalidUuidExceptionFilter } from './handler';
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
      entities: [__dirname + '/**/*.model{.ts,.js}'], // Original entities import
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
      .exclude(
        { path: 'auth', method: RequestMethod.ALL }, // Exclude 'auth' endpoints
        { path: 'project', method: RequestMethod.ALL }, // Exclude 'project' endpoints
        { path: 'user', method: RequestMethod.POST }, // Exclude 'user' POST endpoint
        { path: 'role', method: RequestMethod.POST }, // Exclude 'role' POST endpoint
      )
      .forRoutes('*'); // Apply Authorization middleware to all routes except those excluded
  }
}
