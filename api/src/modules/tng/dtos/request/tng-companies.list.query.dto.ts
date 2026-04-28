import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export enum TngCompanyStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  TRIAL = 'trial',
  CANCELLED = 'cancelled',
}

export class TngCompaniesListQueryDto {
  @ApiPropertyOptional({ example: 'acme', description: 'Search by company name or code' })
  @IsOptional()
  @IsString()
  q?: string;

  @ApiPropertyOptional({ enum: TngCompanyStatus })
  @IsOptional()
  @IsEnum(TngCompanyStatus)
  status?: TngCompanyStatus;

  @ApiPropertyOptional({ example: 'plan_enterprise_uuid', description: 'Filter by plan ID' })
  @IsOptional()
  @IsUUID()
  planId?: string;

  @ApiPropertyOptional({ example: 1, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ example: 20, default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;
}
