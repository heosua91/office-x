import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingRoomPersonalSessionAudioReadyResponseDto {
  @ApiProperty({ example: 'sess_personal_xyz789' })
  @Expose()
  deviceSessionId: string;

  @ApiProperty({ example: 'ready' })
  @Expose()
  audioState: 'ready';

  @ApiProperty({ example: 'wss://audio.officex.io/stream/sess_personal_xyz789', description: 'WebSocket endpoint for audio streaming' })
  @Expose()
  websocketEndpoint: string;

  @ApiProperty({ example: 'stream_tok_abc987xyz', description: 'Short-lived token for authenticating the audio WebSocket connection' })
  @Expose()
  streamToken: string;
}
