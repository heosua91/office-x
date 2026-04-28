import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class UploadItemDto {
  @ApiProperty({ example: 'nda_signed.pdf' })
  @Expose()
  fileName: string;

  @ApiProperty({ example: 'https://storage.example.com/upload?token=xyz&expires=1745000000' })
  @Expose()
  signedUrl: string;

  @ApiProperty({ example: '2026-04-25T11:00:00.000Z', description: 'Signed URL expiry (ISO 8601)' })
  @Expose()
  expiresAt: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440080' })
  @Expose()
  documentId: string;
}

export class GuestMeetingsDocumentsUploadResponseDto {
  @ApiProperty({ type: [UploadItemDto] })
  @Expose()
  @Type(() => UploadItemDto)
  uploads: UploadItemDto[];
}
