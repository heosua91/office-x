import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TngCompaniesProxyCreateResponseDto {
  @ApiProperty({ example: 'c2d3e4f5-a6b7-8901-cdef-234567890123' })
  @Expose()
  companyId: string;

  @ApiProperty({ example: 'ACME-002' })
  @Expose()
  companyCode: string;

  @ApiProperty({ example: 'u3e4f5a6-b7c8-9012-def0-345678901234' })
  @Expose()
  adminUserId: string;

  @ApiProperty({ example: 'Enterprise Trial' })
  @Expose()
  planName: string;
}
