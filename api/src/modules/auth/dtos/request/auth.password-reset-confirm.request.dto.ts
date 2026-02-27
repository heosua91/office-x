import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthPasswordResetConfirmRequestDto {
  @ApiProperty({
    example: 'reset-token-123',
  })
  @IsString()
  @IsNotEmpty()
  token: string;

  @ApiProperty({
    example: 'NewPassword123!',
  })
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
