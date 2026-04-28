import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export enum DevicePurpose {
  RECEPTION = 'reception',
  ROOM_DISPLAY = 'room_display',
}

export class ReceptionAuthLoginResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock.device_access_token' })
  @Expose()
  accessToken: string;

  @ApiProperty({ example: 'Bearer' })
  @Expose()
  tokenType: string;

  @ApiProperty({ example: 86400, description: 'Token expiry duration in seconds' })
  @Expose()
  expiresIn: number;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  @Expose()
  deviceId: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440001' })
  @Expose()
  companyId: string;

  @ApiProperty({ enum: DevicePurpose, example: DevicePurpose.RECEPTION })
  @Expose()
  purpose: DevicePurpose;
}
