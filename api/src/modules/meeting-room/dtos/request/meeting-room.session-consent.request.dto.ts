import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class MeetingRoomSessionConsentRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the consenting device' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Meeting ID this consent relates to' })
  @IsUUID()
  meetingId: string;

  @ApiProperty({ example: true, description: 'Whether the participant consents to recording' })
  @IsBoolean()
  consentGiven: boolean;

  @ApiProperty({ example: 'v2.1.0', description: 'Terms version the participant consented to' })
  @IsString()
  termsVersion: string;
}
