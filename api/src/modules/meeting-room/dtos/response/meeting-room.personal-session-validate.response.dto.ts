import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export enum PersonalSessionParticipantType {
  USER = 'user',
  GUEST = 'guest',
}

export class PersonalSessionMeetingInfoDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Q2 Planning Sync' })
  @Expose()
  title: string;

  @ApiProperty({ example: '2026-04-25T09:00:00.000Z' })
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2026-04-25T10:00:00.000Z' })
  @Expose()
  endTime: string;

  @ApiProperty({ example: 'Horizon Room' })
  @Expose()
  roomName: string;
}

export class PersonalSessionParticipantItemDto {
  @ApiProperty({ example: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Alice Johnson' })
  @Expose()
  fullName: string;

  @ApiProperty({ enum: PersonalSessionParticipantType, example: PersonalSessionParticipantType.USER })
  @Expose()
  type: PersonalSessionParticipantType;
}

export class PersonalSessionJoinWindowDto {
  @ApiProperty({ example: '2026-04-25T08:45:00.000Z' })
  @Expose()
  startAt: string;

  @ApiProperty({ example: '2026-04-25T09:15:00.000Z' })
  @Expose()
  endAt: string;
}

export class MeetingRoomPersonalSessionValidateResponseDto {
  @ApiProperty({ example: true, description: 'Whether the token/code is valid and within the join window' })
  @Expose()
  valid: boolean;

  @ApiPropertyOptional({ type: PersonalSessionMeetingInfoDto })
  @Expose()
  @Type(() => PersonalSessionMeetingInfoDto)
  meeting?: PersonalSessionMeetingInfoDto;

  @ApiPropertyOptional({ type: [PersonalSessionParticipantItemDto] })
  @Expose()
  @Type(() => PersonalSessionParticipantItemDto)
  participants?: PersonalSessionParticipantItemDto[];

  @ApiProperty({ type: PersonalSessionJoinWindowDto })
  @Expose()
  @Type(() => PersonalSessionJoinWindowDto)
  joinWindow: PersonalSessionJoinWindowDto;
}
