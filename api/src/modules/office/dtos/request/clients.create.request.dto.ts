import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
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
import { BookingFormat } from './meetings.booking-generate.request.dto';

export class ClientContactDto {
  @ApiProperty({ example: 'Jane Doe' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'jane.doe@acme.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: '+84901234567' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: 'Director of Operations' })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isMain?: boolean;
}

export class ClientUrlSettingsDto {
  @ApiProperty({ example: 'Product Demo' })
  @IsString()
  title: string;

  @ApiProperty({ example: 60 })
  @IsInt()
  @Min(15)
  durationMinutes: number;

  @ApiProperty({ enum: BookingFormat, example: BookingFormat.ONLINE })
  @IsEnum(BookingFormat)
  format: BookingFormat;

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
}

export class ClientsCreateRequestDto {
  @ApiProperty({ example: 'Acme Corp' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: '123 Main St, Ho Chi Minh City' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ example: '+84901234567' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: 'contact@acme.com' })
  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @ApiPropertyOptional({ example: 'Jane Doe' })
  @IsOptional()
  @IsString()
  contactPerson?: string;

  @ApiPropertyOptional({ example: 'Technology' })
  @IsOptional()
  @IsString()
  industry?: string;

  @ApiPropertyOptional({ type: [ClientContactDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClientContactDto)
  contacts?: ClientContactDto[];

  @ApiPropertyOptional({ type: () => ClientUrlSettingsDto })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => ClientUrlSettingsDto)
  urlSettings?: ClientUrlSettingsDto;
}
