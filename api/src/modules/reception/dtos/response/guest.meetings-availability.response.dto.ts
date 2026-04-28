import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export enum MeetingFormat {
  IN_PERSON = 'in_person',
  ONLINE = 'online',
  HYBRID = 'hybrid',
}

export class MeetingInfoDto {
  @ApiProperty({ example: 'Quarterly Business Review' })
  @Expose()
  title: string;

  @ApiProperty({ example: 30 })
  @Expose()
  durationMinutes: number;

  @ApiProperty({ enum: MeetingFormat, example: MeetingFormat.IN_PERSON })
  @Expose()
  format: MeetingFormat;

  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  hostName: string;

  @ApiProperty({ example: 'OfficeX Corp' })
  @Expose()
  hostCompanyName: string;

  @ApiProperty({ example: false })
  @Expose()
  isConfidential: boolean;
}

export class TimeSlotDto {
  @ApiProperty({ example: '2026-04-25T10:00:00.000Z' })
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2026-04-25T10:30:00.000Z' })
  @Expose()
  endTime: string;

  @ApiProperty({ example: true })
  @Expose()
  available: boolean;
}

export class PrefilledGuestDto {
  @ApiProperty({ example: 'Tran Thi B', nullable: true })
  @Expose()
  name?: string;

  @ApiProperty({ example: 'b.tran@vendor.com', nullable: true })
  @Expose()
  email?: string;

  @ApiProperty({ example: 'Vendor Corp', nullable: true })
  @Expose()
  companyName?: string;

  @ApiProperty({ example: '+84901234567', nullable: true })
  @Expose()
  phone?: string;
}

export class GuestMeetingsAvailabilityResponseDto {
  @ApiProperty({ type: MeetingInfoDto })
  @Expose()
  @Type(() => MeetingInfoDto)
  meeting: MeetingInfoDto;

  @ApiProperty({ type: [TimeSlotDto] })
  @Expose()
  @Type(() => TimeSlotDto)
  slots: TimeSlotDto[];

  @ApiProperty({ type: PrefilledGuestDto, required: false, nullable: true })
  @Expose()
  @Type(() => PrefilledGuestDto)
  prefilledGuest?: PrefilledGuestDto;
}
