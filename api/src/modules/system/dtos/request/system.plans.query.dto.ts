import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class SystemPlansQueryDto {
  @ApiPropertyOptional({ example: 'plan-uuid-xxxx', description: 'Filter by a specific plan UUID' })
  @IsUUID()
  @IsOptional()
  planId?: string;
}
