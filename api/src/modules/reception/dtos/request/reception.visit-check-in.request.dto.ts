import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ReceptionVisitCheckInRequestDto {
  @ApiProperty({
    example: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
    required: false,
    description: 'QR code hash from guest pass. One of qrCodeHash or bookingCode is required.',
  })
  @IsOptional()
  @IsString()
  qrCodeHash?: string;

  @ApiProperty({
    example: 'BK-20260425-0001',
    required: false,
    description: 'Alphanumeric booking code from confirmation email. One of qrCodeHash or bookingCode is required.',
  })
  @IsOptional()
  @IsString()
  bookingCode?: string;
}
