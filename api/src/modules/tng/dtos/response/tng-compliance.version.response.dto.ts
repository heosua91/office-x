import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TngComplianceVersionResponseDto {
  @ApiProperty({ example: 'v1a2b3c4-d5e6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'terms_of_use' })
  @Expose()
  docType: string;

  @ApiProperty({ example: '2.1.0' })
  @Expose()
  version: string;

  @ApiProperty({ example: '2026-06-01' })
  @Expose()
  effectiveDate: string;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;
}
