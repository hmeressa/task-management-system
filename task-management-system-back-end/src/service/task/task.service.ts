import { Injectable } from '@nestjs/common';
import { TaskDto, TaskUpdateDto, UserTaskDto } from 'src/dto';
import { TaskInterface } from '../../interface';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskModel, UserTaskModel } from '../../model';
import { TaskRepository, UserTaskRepository } from '../../repository';

@Injectable()
export class TaskService implements TaskInterface {
  constructor(
    @InjectRepository(TaskModel)
    private readonly taskRepository: TaskRepository,

    @InjectRepository(UserTaskModel)
    private readonly userTaskRepository: UserTaskRepository,
  ) {}

  async createTask(taskDto: TaskDto): Promise<TaskModel> {
    const task = await this.taskRepository.create(taskDto);
    return await this.taskRepository.save(task);
  }

  async getTask(id: string): Promise<any> {
    return await this.taskRepository.findOne({
      where: { id: id },
      relations: ['project', 'user'],
    });
  }

  async getTasks(): Promise<any> {
    return await this.taskRepository.find({ relations: ['project', 'user'] });
  }

  async getTaskByName(name: string): Promise<any> {
    return await this.taskRepository.findOne({ where: { name: name } });
  }

  async getTaskByUserId(userId: string): Promise<any> {
    return await this.taskRepository.findOne({ where: { id: userId } });
  }

  async deleteTask(id: string): Promise<any> {
    return await this.taskRepository.delete(id);
  }

  async updateTask(id: string, taskDto: TaskUpdateDto): Promise<any> {
    return await this.taskRepository.update(id, taskDto);
  }
  async assignTaskToUser(userTaskDto: UserTaskDto): Promise<any> {
    const { userId, tasksId } = userTaskDto;
    const assignedTaskToUser = tasksId?.map((taskId) => {
      const assignTaskToUser = this.userTaskRepository.create({
        userId: userId,
        taskId: taskId,
      });
      return assignTaskToUser;
    });
    return await this.userTaskRepository.save(assignedTaskToUser);
  }

  async reAssignTaskToUser(taskId: any, userId: any): Promise<any> {
    // return await this.taskRepository.update(taskId, { userId: userId.id });
  }
}
