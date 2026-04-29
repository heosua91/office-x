import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { AdminTabletPurpose } from './admin-tablets.create.request.dto';

export class AdminTabletUpdateRequestDto {
  @ApiPropertyOptional({ example: 'Main Lobby Tablet' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  @ApiPropertyOptional({ example: 'Ground Floor, Reception Area' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  location?: string;

  @ApiPropertyOptional({
    example: 'iPad-lobby-01',
    description: 'Login ID — half-width alphanumeric/symbols, max 255, unique among active tablets',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  @Matches(/^[\x21-\x7E]+$/, {
    message: 'device_identifier must be half-width alphanumeric/symbols only',
  })
  deviceIdentifier?: string;

  @ApiPropertyOptional({
    example: 'Pa$$w0rd123',
    description: 'Login password — 8-32 half-width alphanumeric/symbol characters',
  })
  @IsOptional()
  @IsString()
  @Length(8, 32)
  @Matches(/^[\x21-\x7E]+$/, {
    message: 'password must be half-width alphanumeric/symbols only',
  })
  password?: string;

  @ApiPropertyOptional({ enum: AdminTabletPurpose })
  @IsOptional()
  @IsEnum(AdminTabletPurpose)
  purpose?: AdminTabletPurpose;

  @ApiPropertyOptional({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @IsOptional()
  @IsUUID()
  meetingRoomId?: string;

  @ApiPropertyOptional({ type: Object })
  @IsOptional()
  @IsObject()
  settings?: object;

  @ApiPropertyOptional({
    example: true,
    description: "Toggle status: TRUE = 'online', FALSE = 'maintenance'",
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
