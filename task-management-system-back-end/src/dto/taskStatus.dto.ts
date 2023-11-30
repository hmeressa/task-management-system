// taskStatus.dto.ts
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatusEnum } from '../utils/taskStatus.utils';

export class TaskStatusDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task status name' })
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task status status [ ]' })
  @IsEnum(TaskStatusEnum)
  taskStatus: TaskStatusEnum;
}
