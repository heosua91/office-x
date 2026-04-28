import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export enum VisitStatus {
  NOTIFYING = 'notifying',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  COMPLETED = 'completed',
}

export class ReceptionVisitStatusResponseDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440020' })
  @Expose()
  visitId: string;

  @ApiProperty({ enum: VisitStatus, example: VisitStatus.NOTIFYING })
  @Expose()
  status: VisitStatus;

  @ApiProperty({ example: 'Nguyen Van A', nullable: true, required: false })
  @Expose()
  hostName?: string;

  @ApiProperty({ example: 'Engineering', nullable: true, required: false })
  @Expose()
  departmentName?: string;

  @ApiProperty({ example: 'Horizon Room', nullable: true, required: false })
  @Expose()
  meetingRoomName?: string;

  @ApiProperty({ example: 42, description: 'Seconds elapsed since notification was sent' })
  @Expose()
  elapsedSeconds: number;

  @ApiProperty({ example: false, description: 'Whether the wait time has exceeded the configured timeout' })
  @Expose()
  timeoutExceeded: boolean;

  @ApiProperty({ example: 'ws://app.example.com/visit/550e8400-e29b-41d4-a716-446655440020' })
  @Expose()
  websocketChannel: string;
}
