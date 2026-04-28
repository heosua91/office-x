import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export enum AdminCompanyAiUsageLimitSettingResponse {
  AUTO_POSTPAID = 'auto_postpaid',
  FORCE_STOP = 'force_stop',
}

export class AdminCompanyProfileResponseDto {
  @ApiProperty({ example: 'f0e1d2c3-b4a5-9678-0fed-cba987654321' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Acme Corporation' })
  @Expose()
  name: string;

  @ApiProperty({ example: '1-2-3 Shinjuku, Shinjuku-ku, Tokyo 160-0022' })
  @Expose()
  address: string;

  @ApiProperty({ example: 'Taro Yamada' })
  @Expose()
  contactPerson: string;

  @ApiProperty({ example: '+81-3-1234-5678' })
  @Expose()
  contactPhone: string;

  @ApiProperty({ example: 'contact@acme.com' })
  @Expose()
  contactEmail: string;

  @ApiPropertyOptional({ example: 'billing@acme.com' })
  @Expose()
  billingEmail?: string;

  @ApiProperty({ example: 'This meeting will be recorded for quality and training purposes.' })
  @Expose()
  recordingConsentMessage: string;

  @ApiProperty({ enum: AdminCompanyAiUsageLimitSettingResponse, example: AdminCompanyAiUsageLimitSettingResponse.AUTO_POSTPAID })
  @Expose()
  aiUsageLimitSetting: AdminCompanyAiUsageLimitSettingResponse;
}
