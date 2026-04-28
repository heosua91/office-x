import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AuthLoginResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.signature', description: 'JWT access token' })
  @Expose()
  accessToken: string;

  @ApiProperty({ example: 'Bearer' })
  @Expose()
  tokenType: string;

  @ApiProperty({ example: 3600, description: 'Token expiry duration in seconds' })
  @Expose()
  expiresIn: number;

  @ApiProperty({ example: false, description: 'Whether the user must accept latest Terms/Privacy before proceeding' })
  @Expose()
  requireConsent: boolean;

  @ApiProperty({ example: false, description: 'Whether the user must change their password before proceeding' })
  @Expose()
  requirePasswordReset: boolean;
}
