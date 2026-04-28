import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthResetPasswordFirstTimeRequestDto {
  @ApiProperty({ example: 'TemporaryP@ss1', description: 'Current (temporary) password provided at account creation' })
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @ApiProperty({ example: 'NewSecureP@ss1', minLength: 8, description: 'New permanent password' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string;
}
