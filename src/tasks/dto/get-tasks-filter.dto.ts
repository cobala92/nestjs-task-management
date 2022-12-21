import { TaskStatus } from '../task-status.enum';

import { IsOptional, IsString, IsEnum } from 'class-validator';
export class GetTasksFilterDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsString()
  @IsOptional()
  search?: string;
}
