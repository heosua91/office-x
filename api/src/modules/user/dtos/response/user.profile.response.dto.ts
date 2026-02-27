import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserProfileResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  username: string;

  @ApiProperty()
  @Expose()
  role: string;

  @ApiProperty()
  @Expose()
  lockedAt: Date | null;

  @ApiProperty()
  @Expose()
  passwordChangedAt: Date | null;

  @ApiProperty()
  @Expose()
  failedLoginAttempts: number;

  @ApiProperty()
  @Expose()
  lastLoginAt: Date | null;
}
