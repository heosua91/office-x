import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class GuestProfileDto {
  @ApiProperty({ example: 'Tran Thi B' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'b.tran@vendor.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Vendor Corp', required: false })
  @IsOptional()
  @IsString()
  companyName?: string;

  @ApiProperty({ example: '+84901234567', required: false })
  @IsOptional()
  @IsString()
  phone?: string;
}

export class CompanionDto {
  @ApiProperty({ example: 'Le Van C' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'c.le@vendor.com', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: 'Vendor Corp', required: false })
  @IsOptional()
  @IsString()
  companyName?: string;

  @ApiProperty({ example: '+84901234568', required: false })
  @IsOptional()
  @IsString()
  phone?: string;
}

export class GuestMeetingsReserveRequestDto {
  @ApiProperty({ example: 'inv_tok_abc123xyz' })
  @IsString()
  @IsNotEmpty()
  inviteToken: string;

  @ApiProperty({ example: '2026-04-25T10:00:00.000Z', description: 'ISO 8601 meeting start time' })
  @IsISO8601()
  startTime: string;

  @ApiProperty({ example: '2026-04-25T10:30:00.000Z', description: 'ISO 8601 meeting end time' })
  @IsISO8601()
  endTime: string;

  @ApiProperty({ example: 'Asia/Ho_Chi_Minh' })
  @IsString()
  @IsNotEmpty()
  timezone: string;

  @ApiProperty({ type: GuestProfileDto })
  @ValidateNested()
  @Type(() => GuestProfileDto)
  guest: GuestProfileDto;

  @ApiProperty({ type: [CompanionDto], required: false })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanionDto)
  companions?: CompanionDto[];
}
