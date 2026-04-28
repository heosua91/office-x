import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class DeviceSessionReadyResponseDto {
  @ApiProperty({ example: 'sess_abc123def456' })
  @Expose()
  deviceSessionId: string;

  @ApiProperty({ example: 'ready' })
  @Expose()
  status: 'ready';

  @ApiProperty({ example: '2026-04-25T08:00:00.000Z' })
  @Expose()
  readyAt: string;
}
