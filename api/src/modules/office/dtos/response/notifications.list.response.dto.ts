import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class NotificationsItemResponseDto {
  @ApiProperty({ example: 'p6q7r8s9-t0u1-2345-v678-901234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'meeting_reminder', description: 'Notification type identifier' })
  @Expose()
  type: string;

  @ApiProperty({ example: 'Meeting Reminder: Q2 Strategy Sync' })
  @Expose()
  title: string;

  @ApiProperty({ example: 'Your meeting starts in 15 minutes.' })
  @Expose()
  body: string;

  @ApiPropertyOptional({ example: '/meetings/b2c3d4e5-f6a7-8901-bcde-f12345678901' })
  @Expose()
  linkUrl?: string;

  @ApiPropertyOptional({ example: 'meeting' })
  @Expose()
  relatedResourceType?: string;

  @ApiPropertyOptional({ example: 'b2c3d4e5-f6a7-8901-bcde-f12345678901' })
  @Expose()
  relatedResourceId?: string;

  @ApiProperty({ example: false })
  @Expose()
  isRead: boolean;

  @ApiPropertyOptional({ example: null })
  @Expose()
  readAt?: string;

  @ApiProperty({ example: '2026-04-25T08:45:00.000Z' })
  @Expose()
  createdAt: string;
}

export class NotificationsListResponseDto {
  @ApiProperty({ type: [NotificationsItemResponseDto] })
  @Expose()
  @Type(() => NotificationsItemResponseDto)
  items: NotificationsItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 7 })
  @Expose()
  total: number;
}
