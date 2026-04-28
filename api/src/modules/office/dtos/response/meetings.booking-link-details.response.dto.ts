import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MeetingsBookingLinkDetailsResponseDto {
  @ApiProperty({ example: 'f6a7b8c9-d0e1-2345-f012-456789012345' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'permanent', enum: ['permanent', 'spot'] })
  @Expose()
  urlType: string;

  @ApiProperty({ example: 'Product Demo Session' })
  @Expose()
  title: string;

  @ApiProperty({ example: 'Acme Corp' })
  @Expose()
  clientCompanyName: string;

  @ApiProperty({ example: 60 })
  @Expose()
  durationMinutes: number;

  @ApiProperty({ example: 'online', enum: ['online', 'offline', 'hybrid'] })
  @Expose()
  format: string;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;

  @ApiProperty({ example: 'inv_tkn_mock_abc123xyz' })
  @Expose()
  inviteToken: string;

  @ApiProperty({ example: '2026-04-01T08:00:00.000Z' })
  @Expose()
  createdAt: string;
}
