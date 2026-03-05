import { ApiProperty } from '@nestjs/swagger';

export class GuestAvailabilityResponseDto {
  @ApiProperty({ example: '2024-03-01T10:00:00Z' })
  startTime: Date;

  @ApiProperty({ example: '2024-03-01T11:00:00Z' })
  endTime: Date;

  @ApiProperty({ example: true })
  isAvailable: boolean;

  @ApiProperty({ example: [1, 2], description: 'List of available room IDs' })
  availableRoomIds: number[];
}
