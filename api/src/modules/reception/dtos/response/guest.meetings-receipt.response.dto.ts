import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class ReceiptMeetingDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440070' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Quarterly Business Review' })
  @Expose()
  title: string;

  @ApiProperty({ example: '2026-04-25T10:00:00.000Z' })
  @Expose()
  startTime: string;

  @ApiProperty({ example: '2026-04-25T10:30:00.000Z' })
  @Expose()
  endTime: string;

  @ApiProperty({ example: 'in_person' })
  @Expose()
  format: string;

  @ApiProperty({ example: 'https://meet.example.com/room/abc', nullable: true, required: false })
  @Expose()
  meetingUrl?: string;

  @ApiProperty({ example: 'BK-20260425-0001' })
  @Expose()
  bookingCode: string;

  @ApiProperty({ example: 'https://signed.example.com/qr.png' })
  @Expose()
  qrCodeImageUrl: string;

  @ApiProperty({ example: 'Asia/Ho_Chi_Minh' })
  @Expose()
  bookingTimezone: string;
}

export class ReceiptRoomDto {
  @ApiProperty({ example: 'Horizon Room' })
  @Expose()
  name: string;

  @ApiProperty({ example: '3rd Floor, East Wing' })
  @Expose()
  location: string;

  @ApiProperty({ example: 'https://cdn.example.com/maps/floor3.png', nullable: true, required: false })
  @Expose()
  mapImageUrl?: string;
}

export class ReceiptHostDto {
  @ApiProperty({ example: 'Nguyen Van A' })
  @Expose()
  fullName: string;

  @ApiProperty({ example: 'a.nguyen@officex.com' })
  @Expose()
  email: string;

  @ApiProperty({ example: 'OfficeX Corp' })
  @Expose()
  companyName: string;

  @ApiProperty({ example: '123 Le Loi, District 1, Ho Chi Minh City' })
  @Expose()
  companyAddress: string;

  @ApiProperty({ example: '+84281234567' })
  @Expose()
  companyPhone: string;

  @ApiProperty({ example: 'https://cdn.example.com/logos/officex.png', nullable: true, required: false })
  @Expose()
  logoUrl?: string;
}

export class ReceiptGuestItemDto {
  @ApiProperty({ example: 'Tran Thi B' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'b.tran@vendor.com' })
  @Expose()
  email: string;

  @ApiProperty({ example: 'https://meet.example.com/join/token_abc', nullable: true, required: false })
  @Expose()
  meetingRoomJoinUrl?: string;
}

export class GuestMeetingsReceiptResponseDto {
  @ApiProperty({ type: ReceiptMeetingDto })
  @Expose()
  @Type(() => ReceiptMeetingDto)
  meeting: ReceiptMeetingDto;

  @ApiProperty({ type: ReceiptRoomDto, required: false, nullable: true })
  @Expose()
  @Type(() => ReceiptRoomDto)
  room?: ReceiptRoomDto;

  @ApiProperty({ type: ReceiptHostDto })
  @Expose()
  @Type(() => ReceiptHostDto)
  host: ReceiptHostDto;

  @ApiProperty({ type: [ReceiptGuestItemDto] })
  @Expose()
  @Type(() => ReceiptGuestItemDto)
  guests: ReceiptGuestItemDto[];

  @ApiProperty({ example: 'https://signed.example.com/upload?token=abc', nullable: true, required: false })
  @Expose()
  documentsUploadUrl?: string;
}
