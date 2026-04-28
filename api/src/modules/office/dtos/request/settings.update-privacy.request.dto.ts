import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum } from 'class-validator';

export enum MeetingVisibility {
  PUBLIC = 'public',
  INTERNAL = 'internal',
  CONFIDENTIAL = 'confidential',
}

export enum MemoScope {
  PRIVATE = 'private',
  SHARED = 'shared',
}

export class SettingsUpdatePrivacyRequestDto {
  @ApiProperty({ enum: MeetingVisibility, example: MeetingVisibility.INTERNAL })
  @IsEnum(MeetingVisibility)
  defaultMeetingVisibility: MeetingVisibility;

  @ApiProperty({ enum: MemoScope, example: MemoScope.PRIVATE })
  @IsEnum(MemoScope)
  memoScope: MemoScope;

  @ApiProperty({ example: false, description: 'Sync AI summaries with client-facing view' })
  @IsBoolean()
  clientViewSync: boolean;
}
