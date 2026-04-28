import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class TngAiApproveOverageRequestDto {
  @ApiProperty({ example: '2026-04', description: 'Billing month in YYYY-MM format' })
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}$/, { message: 'billingMonth must be in YYYY-MM format' })
  billingMonth: string;

  @ApiPropertyOptional({ example: 'acme', description: 'Process only companies matching this keyword' })
  @IsOptional()
  @IsString()
  companyKeyword?: string;

  @ApiPropertyOptional({ example: false, description: 'Include companies already billed this month' })
  @IsOptional()
  @IsBoolean()
  includeBilled?: boolean;
}
