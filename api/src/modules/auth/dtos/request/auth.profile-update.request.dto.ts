import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class AuthProfileUpdateRequestDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The updated display name',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The updated email address',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: 'NewSecret123!',
    description: 'The new password if user wants to change it',
  })
  @IsString()
  @IsOptional()
  @MinLength(8)
  password?: string;

  @ApiProperty({
    example: 'OldSecret123!',
    description: 'The current password for verification',
  })
  @IsString()
  @IsOptional()
  currentPassword?: string;
}
