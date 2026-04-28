import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminMonitoringRuleItemDto {
  @ApiProperty({ example: 'rule_001' })
  @Expose()
  id: string;

  @ApiPropertyOptional({ example: 'cmp_abc123', description: 'Company ID — null for global TNG rules' })
  @Expose()
  companyId?: string;

  @ApiProperty({ example: 'Failed Login Spike' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'failed_login_count' })
  @Expose()
  ruleType: string;

  @ApiProperty({ example: 10 })
  @Expose()
  threshold: number;

  @ApiPropertyOptional({ example: 300 })
  @Expose()
  timeWindowSeconds?: number;

  @ApiProperty({ example: 'admin' })
  @Expose()
  notificationTarget: string;

  @ApiProperty({ example: 'once' })
  @Expose()
  notificationFrequency: string;

  @ApiProperty({ example: 'email' })
  @Expose()
  integrationType: string;

  @ApiProperty({ example: 'security@acme.com' })
  @Expose()
  notificationEmail: string;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;

  @ApiProperty({ example: true, description: 'Whether this rule can be modified by the current actor' })
  @Expose()
  isEditable: boolean;

  @ApiProperty({ example: '2026-04-01T00:00:00.000Z' })
  @Expose()
  createdAt: string;

  @ApiProperty({ example: '2026-04-25T08:00:00.000Z' })
  @Expose()
  updatedAt: string;
}

export class AdminMonitoringRulesListResponseDto {
  @ApiProperty({ type: [AdminMonitoringRuleItemDto] })
  @Expose()
  @Type(() => AdminMonitoringRuleItemDto)
  items: AdminMonitoringRuleItemDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 5 })
  @Expose()
  total: number;
}
