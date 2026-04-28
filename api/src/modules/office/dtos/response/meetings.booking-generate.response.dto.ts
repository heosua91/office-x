import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingsBookingGenerateResponseDto {
  @ApiProperty({ example: 'b2c3d4e5-f6a7-8901-bcde-f12345678901' })
  @Expose()
  meetingId: string;

  @ApiProperty({ example: 'inv_tkn_mock_abc123xyz' })
  @Expose()
  inviteToken: string;

  @ApiProperty({ example: 'https://app.officex.io/book/inv_tkn_mock_abc123xyz' })
  @Expose()
  smartUrl: string;
}
