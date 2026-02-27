import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class OfficeUpdatePrivacyRequestDto {
  @ApiProperty({
    description: 'Whether AI summaries are visible internally only',
  })
  @IsBoolean()
  @IsNotEmpty()
  internalOnly: boolean;
}

export class OfficeWebhookResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  platform: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  isEnabled: boolean;
}

export class OfficeUpdateWebhookRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  platform: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isEnabled?: boolean;
}

export class OfficePresenceResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: [String] })
  blackoutDates: string[];

  @ApiProperty()
  isAutoAcceptEnabled: boolean;
}

export class OfficeUpdatePresenceRequestDto {
  @ApiProperty({ type: [String] })
  @IsOptional()
  blackoutDates?: string[];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isAutoAcceptEnabled?: boolean;
}
