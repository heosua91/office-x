import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { MeetingsTimelineItemResponseDto } from './meetings.timeline.response.dto';

export class MeetingsFolderResponseDto {
  @ApiProperty({ type: [MeetingsTimelineItemResponseDto] })
  @Expose()
  @Type(() => MeetingsTimelineItemResponseDto)
  items: MeetingsTimelineItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 15 })
  @Expose()
  total: number;
}
