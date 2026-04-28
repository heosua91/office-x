import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min } from 'class-validator';

export class MeetingRoomPersonalSessionAudioReadyRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the personal browser device' })
  @IsString()
  deviceSessionId: string;

  @ApiProperty({ example: 48000, description: 'Audio sample rate in Hz' })
  @IsInt()
  @Min(8000)
  sampleRateHz: number;

  @ApiProperty({ example: 1, description: 'Number of audio channels (1 = mono, 2 = stereo)' })
  @IsInt()
  @Min(1)
  channels: number;
}
