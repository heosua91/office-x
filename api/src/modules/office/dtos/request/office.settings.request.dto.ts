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

export class OfficeIntegrationResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  platform: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  isEnabled: boolean;
}

export class OfficeUpdateIntegrationRequestDto {
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

export class OfficeAvailabilityResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty({
    description: 'Availability schedule by day of week (0-6)',
    example: [{ dayOfWeek: 1, startTime: '09:00', endTime: '18:00' }],
  })
  schedule: any[];

  @ApiProperty({ type: [String] })
  blackoutDates: string[];
}

export class OfficeUpdateAvailabilityRequestDto {
  @ApiProperty({
    description: 'Availability schedule by day of week (0-6)',
  })
  @IsOptional()
  schedule?: any[];

  @ApiProperty({ type: [String] })
  @IsOptional()
  blackoutDates?: string[];
}

