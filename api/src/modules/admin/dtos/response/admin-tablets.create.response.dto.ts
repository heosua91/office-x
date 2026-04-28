import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminTabletCreateResponseDto {
  @ApiProperty({ example: 'e5f6a7b8-c9d0-1234-ef01-345678901234' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'TAB-00001' })
  @Expose()
  deviceIdentifier: string;

  @ApiProperty({ example: 'Xk92!vBpQr', description: 'One-time device password — store securely' })
  @Expose()
  password: string;

  @ApiProperty({ example: 'https://storage.example.com/qr/TAB-00001.png', description: 'URL to generated QR code image for device pairing' })
  @Expose()
  qrCodeImageUrl: string;
}
