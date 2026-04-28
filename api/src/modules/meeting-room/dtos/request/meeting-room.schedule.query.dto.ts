import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class MeetingRoomScheduleQueryDto {
  @ApiProperty({ example: 'sess_abc123def456', description: 'Device session ID of the linked tablet' })
  @IsString()
  deviceSessionId: string;
}
