// userTask.dto.ts
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from '../model';

export class UserTaskDto extends BaseModel {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter user id' })
  @IsString()
  userId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task id' })
  @IsArray()
  @IsString({ each: true })
  tasksId: string[];
}
