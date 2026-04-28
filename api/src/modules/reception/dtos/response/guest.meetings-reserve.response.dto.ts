import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class GuestMeetingsReserveResponseDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440070' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: 'BK-20260425-0001' })
  @Expose()
  bookingCode: string;

  @ApiProperty({ example: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4' })
  @Expose()
  qrCodeHash: string;

  @ApiProperty({ example: 'rcpt_tok_xyz789' })
  @Expose()
  receiptToken: string;
}
