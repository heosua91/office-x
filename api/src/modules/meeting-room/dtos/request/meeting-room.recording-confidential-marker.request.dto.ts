import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsUUID } from 'class-validator';

export enum ConfidentialMarkerAction {
  START = 'start',
  END = 'end',
}

export class MeetingRoomRecordingConfidentialMarkerRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the host tablet' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Active meeting ID' })
  @IsUUID()
  meetingId: string;

  @ApiProperty({ enum: ConfidentialMarkerAction, example: ConfidentialMarkerAction.START, description: 'Start or end a confidential segment' })
  @IsEnum(ConfidentialMarkerAction)
  action: ConfidentialMarkerAction;
}
