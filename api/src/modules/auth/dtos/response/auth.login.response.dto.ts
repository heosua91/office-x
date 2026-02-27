import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AuthLoginResponseDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  @Expose()
  accessToken: string;

  @ApiProperty({
    example: 'Bearer',
  })
  @Expose()
  tokenType: string;

  @ApiProperty({
    example: 3600,
  })
  @Expose()
  expiresIn: number;
}
