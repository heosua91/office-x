import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export enum ConfidentialMarkerState {
  STARTED = 'started',
  ENDED = 'ended',
}

export class MeetingRoomRecordingConfidentialMarkerResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  meetingId: string;

  @ApiProperty({ enum: ConfidentialMarkerState, example: ConfidentialMarkerState.STARTED })
  @Expose()
  markerState: ConfidentialMarkerState;

  @ApiProperty({ example: 2100, description: 'Elapsed meeting time in seconds at the moment of the marker' })
  @Expose()
  timestampInMeeting: number;
}
