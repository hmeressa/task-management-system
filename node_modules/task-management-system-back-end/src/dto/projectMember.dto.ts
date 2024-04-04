// projectMember.dto.ts
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from '../model';

export class ProjectMemberDto extends BaseModel {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter user id' })
  @IsArray()
  @IsString({ each: true })
  usersId: string[];

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter project id' })
  @IsString()
  projectId: string;
}
