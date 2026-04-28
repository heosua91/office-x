import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class MeetingsUnbookedItemResponseDto {
  @ApiProperty({ example: 'h8i9j0k1-l2m3-4567-n890-123456789012' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Product Demo Request' })
  @Expose()
  title: string;

  @ApiProperty({ example: 'John Smith' })
  @Expose()
  guestName: string;

  @ApiProperty({ example: 'john.smith@client.com' })
  @Expose()
  guestEmail: string;

  @ApiProperty({ example: '2026-05-15T14:00:00.000Z' })
  @Expose()
  requestedStartTime: string;

  @ApiProperty({ example: 'pending', enum: ['pending', 'confirmed', 'rejected'] })
  @Expose()
  status: string;
}

export class MeetingsUnbookedListResponseDto {
  @ApiProperty({ type: [MeetingsUnbookedItemResponseDto] })
  @Expose()
  @Type(() => MeetingsUnbookedItemResponseDto)
  items: MeetingsUnbookedItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 5 })
  @Expose()
  total: number;
}
