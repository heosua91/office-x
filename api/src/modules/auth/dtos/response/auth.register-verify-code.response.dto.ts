import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AuthRegisterVerifyCodeResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock', description: 'Short-lived verification token' })
  @Expose()
  verificationToken: string;

  @ApiProperty({ example: 900, description: 'Token lifetime in seconds' })
  @Expose()
  expiresInSeconds: number;
}
