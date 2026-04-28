import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AdminUserPasswordResetRequestDto {
  @ApiProperty({ example: 'NewSecureP@ss1' })
  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @ApiPropertyOptional({ example: true, description: 'Force user to reset password on next login' })
  @IsOptional()
  @IsBoolean()
  mustResetPassword?: boolean;
}
