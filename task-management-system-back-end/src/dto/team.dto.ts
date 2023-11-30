// team.dto.ts
import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from '../model';
import { TeamEnum } from '../utils/team.utils';

export class TeamDto extends BaseModel {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter correct team [ ]' })
  @IsEnum(TeamEnum)
  name: TeamEnum;
}
