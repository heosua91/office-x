import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeviceSessionReadyRequestDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the child device signalling readiness' })
  @IsString()
  deviceSessionId: string;
}
