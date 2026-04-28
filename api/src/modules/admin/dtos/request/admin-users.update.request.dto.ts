import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';
import { AdminUserRole, AdminUserStatus } from './admin-users.list.query.dto';

export class AdminUserUpdateRequestDto {
  @ApiPropertyOptional({ example: 'John Smith' })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiPropertyOptional({ example: 'john.smith@acme.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ enum: AdminUserRole })
  @IsOptional()
  @IsEnum(AdminUserRole)
  role?: AdminUserRole;

  @ApiPropertyOptional({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @IsOptional()
  @IsUUID()
  departmentId?: string;

  @ApiPropertyOptional({ type: [String], example: ['d4e5f6a7-b8c9-0123-def0-234567890123'] })
  @IsOptional()
  @IsArray()
  @IsUUID(undefined, { each: true })
  accessDepartmentIds?: string[];

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  viewAllInfo?: boolean;

  @ApiPropertyOptional({ example: 'https://hooks.example.com/user-events' })
  @IsOptional()
  @IsUrl()
  webhookUrl?: string;

  @ApiPropertyOptional({ example: 'https://proxy.example.com/hook' })
  @IsOptional()
  @IsUrl()
  proxyWebhookUrl?: string;

  @ApiPropertyOptional({ enum: AdminUserStatus })
  @IsOptional()
  @IsEnum(AdminUserStatus)
  status?: AdminUserStatus;
}
