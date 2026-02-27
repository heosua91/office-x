import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthRegisterCompanyRequestDto {
  @ApiProperty({
    example: 'TQA Company',
  })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({
    example: 'Admin User',
  })
  @IsString()
  @IsNotEmpty()
  adminName: string;

  @ApiProperty({
    example: 'admin@tqa.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'Password123!',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 1,
    description: 'Plan ID selected',
  })
  @IsNotEmpty()
  planId: number;
}
