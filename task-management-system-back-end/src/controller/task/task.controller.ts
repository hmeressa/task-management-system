import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  NotFoundException,
  Req,
} from '@nestjs/common';
import {
  MailService,
  ProjectService,
  TaskService,
  UserService,
} from '../../service';
import { sendEmailNotification } from '../../utils/sendEmailNotification';

import { TaskDto, TaskUpdateDto, UserTaskDto } from '../../dto';
import { TaskStatusEnum } from 'src/utils/taskStatus.utils';
import { Request } from 'express';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}

  @Post()
  async createTask(
    @Req() req: Request,
    @Body() taskDto: TaskDto,
  ): Promise<any> {
    const isExist = await this.taskService.getTaskByName(taskDto.name);
    if (isExist) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task already exist',
      });
    }
    // taskDto.status = TaskStatusEnum.BACKLOG;
    // await this.mailService.sendEmailNotification(
    //   (req.body as any).email,
    //   'hmkahsay@gmail.com',
    //   'Email Notification',
    //   'EmailEmailEmailEmail',
    //   'This CC is intended to Hiluf',
    // );
    return await this.taskService.createTask(taskDto);
  }

  @Get(':id')
  async getTask(@Param('id') id: string): Promise<any> {
    const task = await this.taskService.getTask(id);
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }
    return task;
  }

  @Get()
  async getTasks(): Promise<any> {
    const tasks = await this.taskService.getTasks();
    console.log(tasks);
    if (!tasks) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }
    return tasks;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<any> {
    const task = await this.getTask(id);
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }
    await this.taskService.deleteTask(id);
    return {
      message: 'Task is Deleted',
      status: 'Success',
    };
  }

  @Patch(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() taskUpdateDto: TaskUpdateDto,
  ): Promise<any> {
    const task = await this.getTask(id);
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }
    return await this.taskService.updateTask(id, taskUpdateDto);
  }

  @Patch('re-assign-user/:taskId/:userId')
  async reAssignUserToTask(
    @Param('id') taskId: string,
    @Param('id') userId: string,
  ): Promise<any> {
    const task = await this.getTask(taskId);
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }
    const user = await this.userService.getUser(task.userId);

    if (!user) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'User NOT FOUND',
      });
    }
    console.log(task.id, user);

    const userTask = await this.taskService.reAssignTaskToUser(task, user);
    return userTask;
  }

  @Get('get-tasks-by-user-id/:id')
  async getTasksByUserId(@Req() request: any): Promise<any> {
    const allTasks = await this.taskService.getTasks();

    const tasksBelongedToUser = await allTasks.filter((user) =>
      user.user.map((u) => {
        u === '5192b800-de0c-4654-8d59-4583284277ff';
      }),
    );
    console.log('allTasks', allTasks.user[0]);
    if (!tasksBelongedToUser) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }

    return tasksBelongedToUser;
  }

  @Post('/assign-user')
  async assignTaskToUser(@Body() userTaskDto: UserTaskDto): Promise<any> {
    const { userId, tasksId } = userTaskDto;
    if (!userId) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'User NOT FOUND',
      });
    }
    tasksId.map(async (task: any) => {
      await this.taskService.getTask(task);
      if (!task) {
        return new NotFoundException({
          message: 'Something bad happened',
          error: 'Task NOT FOUND',
        });
      }
    });
    console.log(userTaskDto);
    return await this.taskService.assignTaskToUser(userTaskDto);
  }
}
