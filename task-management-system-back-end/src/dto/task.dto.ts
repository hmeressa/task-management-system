import { IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatusDto } from './taskStatus.dto';
import { TaskStatusEnum } from 'src/utils/taskStatus.utils';

export class TaskDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task name' })
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task start date' })
  @IsString()
  startDate: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task end date' })
  @IsString()
  endDate: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Task status must not be empty' })
  @IsEnum(TaskStatusEnum)
  status: TaskStatusEnum;
}
