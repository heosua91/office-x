import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AdminCreateUserRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;
}

export class AdminCreateRoomRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  floor: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  capacity: number;
}

export class AdminUpdateBrandingRequestDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  logoUrl?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  primaryColor?: string;
}

export class AdminBuyAiCreditsRequestDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
