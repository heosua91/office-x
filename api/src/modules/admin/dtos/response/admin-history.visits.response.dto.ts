import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminHistoryVisitItemResponseDto {
  @ApiProperty({ example: 'f8a9b0c1-d2e3-4567-f012-678901234567' })
  @Expose()
  id: string;

  @ApiProperty({ example: '2026-04-15T09:05:00.000Z' })
  @Expose()
  checkInTime: string;

  @ApiPropertyOptional({ example: '2026-04-15T10:30:00.000Z', nullable: true })
  @Expose()
  checkOutTime?: string;

  @ApiProperty({ example: 'qr_code', description: 'qr_code | facial | manual' })
  @Expose()
  checkInMethod: string;

  @ApiProperty({ example: 'checked_in', description: 'checked_in | checked_out | no_show' })
  @Expose()
  status: string;

  @ApiProperty({ example: 'Hiroshi Tanaka' })
  @Expose()
  guestName: string;

  @ApiPropertyOptional({ example: 'Global Tech Inc.' })
  @Expose()
  guestCompany?: string;

  @ApiPropertyOptional({ example: 'Q2 Partner Review' })
  @Expose()
  meetingTitle?: string;

  @ApiPropertyOptional({ example: 'John Smith' })
  @Expose()
  hostName?: string;

  @ApiPropertyOptional({ example: 'Horizon Room' })
  @Expose()
  roomName?: string;
}

export class AdminHistoryVisitsListResponseDto {
  @ApiProperty({ type: [AdminHistoryVisitItemResponseDto] })
  @Expose()
  @Type(() => AdminHistoryVisitItemResponseDto)
  items: AdminHistoryVisitItemResponseDto[];

  @ApiProperty({ example: 1 })
  @Expose()
  page: number;

  @ApiProperty({ example: 20 })
  @Expose()
  limit: number;

  @ApiProperty({ example: 154 })
  @Expose()
  total: number;
}

export class AdminHistoryVisitsExportResponseDto {
  @ApiProperty({ example: 'https://signed.example.com/visit-logs-export.csv' })
  @Expose()
  downloadUrl: string;
}
