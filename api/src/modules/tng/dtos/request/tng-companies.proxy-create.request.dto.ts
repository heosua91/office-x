import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class TngCompaniesProxyCreateAdminDto {
  @ApiProperty({ example: 'Alice Tanaka' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'alice.tanaka@acme.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Temp@1234!' })
  @IsNotEmpty()
  @IsString()
  initialPassword: string;
}

export class TngCompaniesProxyCreateRequestDto {
  @ApiProperty({ example: 'Acme Corporation' })
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @ApiPropertyOptional({ example: '1-2-3 Shinjuku, Tokyo' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ example: 'Bob Yamamoto' })
  @IsNotEmpty()
  @IsString()
  contactPerson: string;

  @ApiProperty({ example: '+81-3-1234-5678' })
  @IsNotEmpty()
  @IsString()
  contactPhone: string;

  @ApiProperty({ example: 'bob.yamamoto@acme.com' })
  @IsEmail()
  contactEmail: string;

  @ApiPropertyOptional({ example: 'billing@acme.com' })
  @IsOptional()
  @IsEmail()
  billingEmail?: string;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @IsUUID()
  planId: string;

  @ApiProperty({ type: TngCompaniesProxyCreateAdminDto })
  @ValidateNested()
  @Type(() => TngCompaniesProxyCreateAdminDto)
  admin: TngCompaniesProxyCreateAdminDto;
}
