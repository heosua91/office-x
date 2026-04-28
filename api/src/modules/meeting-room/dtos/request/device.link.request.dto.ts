import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class DeviceLinkRequestDto {
  @ApiProperty({ example: 'TAB-00001', description: 'Unique device identifier' })
  @IsString()
  deviceIdentifier: string;

  @ApiProperty({ example: 'Xk92!vBpQr', description: 'Device password' })
  @IsString()
  password: string;

  @ApiPropertyOptional({ example: 'QR-ROOM-abc123', description: 'Room QR code (one of roomQrCode or roomLinkCode required)' })
  @IsOptional()
  @IsString()
  roomQrCode?: string;

  @ApiPropertyOptional({ example: 'LINK-456XYZ', description: 'Room link code (one of roomQrCode or roomLinkCode required)' })
  @IsOptional()
  @IsString()
  roomLinkCode?: string;
}
