import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingRoomSessionConsentResponseDto {
  @ApiProperty({ example: 'sess_abc123def456' })
  @Expose()
  deviceSessionId: string;

  @ApiProperty({ example: true })
  @Expose()
  consentGiven: boolean;

  @ApiProperty({ example: '2026-04-25T09:01:30.000Z' })
  @Expose()
  recordedAt: string;
}
