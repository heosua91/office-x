import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export enum ParticipantType {
  USER = 'user',
  GUEST = 'guest',
}

export class MeetingRoomParticipantItemDto {
  @ApiProperty({ example: 'f1a2b3c4-d5e6-7890-abcd-ef1234567890' })
  @Expose()
  id: string;

  @ApiProperty({ enum: ParticipantType, example: ParticipantType.USER })
  @Expose()
  type: ParticipantType;

  @ApiProperty({ example: 'Alice Johnson' })
  @Expose()
  fullName: string;

  @ApiProperty({ example: 'host', description: 'Participant role (e.g. host, attendee)' })
  @Expose()
  role: string;

  @ApiProperty({ example: 'accepted', description: 'RSVP status (e.g. accepted, declined, pending)' })
  @Expose()
  rsvpStatus: string;

  @ApiProperty({ example: false, description: 'Whether a seat-tablet has been bound to this participant' })
  @Expose()
  deviceBound: boolean;

  @ApiPropertyOptional({ example: 'A1', description: 'Seat label if a device has been bound' })
  @Expose()
  seatLabel?: string;
}

export class MeetingRoomSessionParticipantsResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' })
  @Expose()
  meetingId: string;

  @ApiProperty({ type: [MeetingRoomParticipantItemDto] })
  @Expose()
  @Type(() => MeetingRoomParticipantItemDto)
  participants: MeetingRoomParticipantItemDto[];
}
