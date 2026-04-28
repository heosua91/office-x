import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export enum TngComplianceDocType {
  TERMS_OF_USE = 'terms_of_use',
  PRIVACY_POLICY = 'privacy_policy',
}

export class TngComplianceVersionRequestDto {
  @ApiProperty({ enum: TngComplianceDocType })
  @IsEnum(TngComplianceDocType)
  docType: TngComplianceDocType;

  @ApiProperty({ example: '2.1.0', description: 'Semantic version string' })
  @IsNotEmpty()
  @IsString()
  version: string;

  @ApiProperty({ example: '2026-06-01', description: 'Date from which this version is effective (ISO date)' })
  @IsNotEmpty()
  @IsDateString()
  effectiveDate: string;

  @ApiProperty({ example: 'https://storage.officex.jp/legal/terms-2.1.0.pdf' })
  @IsUrl()
  fileUrl: string;

  @ApiPropertyOptional({ example: 'Added Section 5 on AI data retention.' })
  @IsOptional()
  @IsString()
  summaryOfChanges?: string;
}
