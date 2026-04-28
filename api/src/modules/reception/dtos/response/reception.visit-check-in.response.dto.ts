import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ReceptionVisitCheckInResponseDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440020' })
  @Expose()
  visitId: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440021' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  hostName: string;

  @ApiProperty({ example: 'Horizon Room', nullable: true, required: false })
  @Expose()
  roomName?: string;

  @ApiProperty({ example: 'notifying' })
  @Expose()
  status: 'notifying';
}
