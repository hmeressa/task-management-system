import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
  @IsNotEmpty({ message: 'Please enter project name' })
  @IsString()
  projectId: string;
}
