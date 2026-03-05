import { ApiProperty } from '@nestjs/swagger';

export class AdminVisitLogResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'John Doe' })
  visitorName: string;

  @ApiProperty({ example: 'Meeting' })
  purpose: string;

  @ApiProperty({ example: '2024-03-01T10:00:00Z' })
  checkInTime: Date;

  @ApiProperty({ example: '2024-03-01T11:00:00Z' })
  checkOutTime?: Date;

  @ApiProperty({ example: 'Room A' })
  roomName: string;
}
