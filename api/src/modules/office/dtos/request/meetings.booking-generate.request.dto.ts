import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum BookingUrlType {
  PERMANENT = 'permanent',
  SPOT = 'spot',
}

export enum BookingFormat {
  ONLINE = 'online',
  OFFLINE = 'offline',
  HYBRID = 'hybrid',
}

export class BookingClientDto {
  @ApiPropertyOptional({ example: 'Acme Corp' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'contact@acme.com' })
  @IsOptional()
  @IsString()
  email?: string;
}

export class BookingScheduleOverridesDto {
  @ApiPropertyOptional({ example: '2026-05-01T00:00:00.000Z' })
  @IsOptional()
  @IsString()
  from?: string;

  @ApiPropertyOptional({ example: '2026-05-31T23:59:59.000Z' })
  @IsOptional()
  @IsString()
  to?: string;

  @ApiPropertyOptional({ example: '09:00-18:00' })
  @IsOptional()
  @IsString()
  workingHours?: string;
}

export class MeetingsBookingGenerateRequestDto {
  @ApiProperty({ enum: BookingUrlType, example: BookingUrlType.PERMANENT })
  @IsEnum(BookingUrlType)
  urlType: BookingUrlType;

  @ApiProperty({ example: 'Product Demo Session' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ example: 'i9j0k1l2-m3n4-5678-o901-234567890123' })
  @IsOptional()
  @IsUUID()
  clientId?: string;

  @ApiPropertyOptional({ type: () => BookingClientDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => BookingClientDto)
  client?: BookingClientDto;

  @ApiProperty({ example: 60 })
  @IsInt()
  @Min(15)
  durationMinutes: number;

  @ApiProperty({ enum: BookingFormat, example: BookingFormat.ONLINE })
  @IsEnum(BookingFormat)
  format: BookingFormat;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  autoRoomReserve?: boolean;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsInt()
  @Min(0)
  autoCancelMinutes?: number;

  @ApiProperty({ type: [String], example: ['c3d4e5f6-a7b8-9012-cdef-123456789012'] })
  @IsArray()
  @IsUUID('4', { each: true })
  participantIds: string[];

  @ApiPropertyOptional({ example: 'tpl_a1b2c3d4mock' })
  @IsOptional()
  @IsString()
  aiTemplateId?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isConfidential?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  hostProxy?: boolean;

  @ApiPropertyOptional({ type: () => BookingScheduleOverridesDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => BookingScheduleOverridesDto)
  scheduleOverrides?: BookingScheduleOverridesDto;
}
