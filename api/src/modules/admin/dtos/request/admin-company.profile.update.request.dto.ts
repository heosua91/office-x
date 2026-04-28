import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export enum AdminCompanyAiUsageLimitSetting {
  AUTO_POSTPAID = 'auto_postpaid',
  FORCE_STOP = 'force_stop',
}

export class AdminCompanyProfileUpdateRequestDto {
  @ApiProperty({ example: 'Acme Corporation' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '1-2-3 Shinjuku, Shinjuku-ku, Tokyo 160-0022', maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  address: string;

  @ApiProperty({ example: 'Taro Yamada' })
  @IsString()
  @IsNotEmpty()
  contactPerson: string;

  @ApiProperty({ example: '+81-3-1234-5678' })
  @IsString()
  @IsNotEmpty()
  contactPhone: string;

  @ApiProperty({ example: 'contact@acme.com' })
  @IsEmail()
  contactEmail: string;

  @ApiPropertyOptional({ example: 'billing@acme.com' })
  @IsOptional()
  @IsEmail()
  billingEmail?: string;

  @ApiProperty({ example: 'This meeting will be recorded for quality and training purposes.' })
  @IsString()
  @IsNotEmpty()
  recordingConsentMessage: string;

  @ApiProperty({ enum: AdminCompanyAiUsageLimitSetting, example: AdminCompanyAiUsageLimitSetting.AUTO_POSTPAID })
  @IsEnum(AdminCompanyAiUsageLimitSetting)
  aiUsageLimitSetting: AdminCompanyAiUsageLimitSetting;
}
