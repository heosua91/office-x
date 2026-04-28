import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminAiTimeBillingLineItemResponseDto {
  @ApiProperty({ example: '2026-04-15T10:30:00.000Z' })
  @Expose()
  timestamp: string;

  @ApiProperty({ example: 'John Smith' })
  @Expose()
  userName: string;

  @ApiProperty({ example: 'meeting_summary' })
  @Expose()
  featureName: string;

  @ApiProperty({ example: 12, description: 'Amount consumed' })
  @Expose()
  amountUsed: number;

  @ApiProperty({ example: 'minutes' })
  @Expose()
  unit: string;

  @ApiPropertyOptional({ example: 'Weekly team sync — Engineering' })
  @Expose()
  context?: string;
}

export class AdminAiTimeBillingSummaryResponseDto {
  @ApiProperty({ example: 342 })
  @Expose()
  withinPlan: number;

  @ApiProperty({ example: 58 })
  @Expose()
  overage: number;

  @ApiProperty({ example: 'JPY' })
  @Expose()
  currency: string;

  @ApiProperty({ example: 69600, description: 'Total amount payable in JPY' })
  @Expose()
  amountPayable: number;
}

export class AdminAiTimeBillingStatementResponseDto {
  @ApiProperty({ example: '2026-04' })
  @Expose()
  month: string;

  @ApiProperty({ example: 400 })
  @Expose()
  totalMinutes: number;

  @ApiProperty({ example: 58 })
  @Expose()
  overageMinutes: number;

  @ApiProperty({ type: [AdminAiTimeBillingLineItemResponseDto] })
  @Expose()
  @Type(() => AdminAiTimeBillingLineItemResponseDto)
  lineItems: AdminAiTimeBillingLineItemResponseDto[];

  @ApiProperty({ type: AdminAiTimeBillingSummaryResponseDto })
  @Expose()
  @Type(() => AdminAiTimeBillingSummaryResponseDto)
  summary: AdminAiTimeBillingSummaryResponseDto;
}

export class AdminAiTimeBillingStatementExportResponseDto {
  @ApiPropertyOptional({ example: 'job_export_abc123def456' })
  @Expose()
  jobId?: string;

  @ApiPropertyOptional({ example: 'https://signed.example.com/ai-usage.csv' })
  @Expose()
  downloadUrl?: string;
}
