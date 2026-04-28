import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export enum RecordingState {
  PAUSED = 'paused',
  RECORDING = 'recording',
}

export class MeetingRoomRecordingPauseResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  meetingId: string;

  @ApiProperty({ enum: RecordingState, example: RecordingState.PAUSED })
  @Expose()
  recordingState: RecordingState;

  @ApiProperty({ example: 1845, description: 'Elapsed meeting time in seconds at the moment of action' })
  @Expose()
  timestampInMeeting: number;
}
