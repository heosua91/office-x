import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsEnum, IsInt, IsOptional, IsString, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum AvailabilityBlockType {
  WEEKLY = 'weekly',
  TEMPORARY = 'temporary',
}

export class AvailabilityBlockDto {
  @ApiProperty({ enum: AvailabilityBlockType, example: AvailabilityBlockType.WEEKLY })
  @IsEnum(AvailabilityBlockType)
  blockType: AvailabilityBlockType;

  @ApiPropertyOptional({ example: 1, description: 'Day of week: 1=Mon … 7=Sun' })
  @IsOptional()
  @IsInt()
  @Min(1)
  dayOfWeek?: number;

  @ApiPropertyOptional({ example: '09:00' })
  @IsOptional()
  @IsString()
  startTime?: string;

  @ApiPropertyOptional({ example: '17:00' })
  @IsOptional()
  @IsString()
  endTime?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isAvailable: boolean;

  @ApiPropertyOptional({ example: 'Lunch break' })
  @IsOptional()
  @IsString()
  reason?: string;
}

export class SettingsUpdateAvailabilityRequestDto {
  @ApiProperty({ type: [AvailabilityBlockDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AvailabilityBlockDto)
  blocks: AvailabilityBlockDto[];

  @ApiPropertyOptional({ example: 24, description: 'Minimum hours in advance a booking can be made' })
  @IsOptional()
  @IsInt()
  @Min(0)
  bookingDeadlineHours?: number;

  @ApiPropertyOptional({ example: 15, description: 'Buffer minutes between meetings' })
  @IsOptional()
  @IsInt()
  @Min(0)
  bufferMinutes?: number;
}
