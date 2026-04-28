import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class AdminPresetUsageDeviceResponseDto {
  @ApiProperty({ example: 'e5f6a7b8-c9d0-1234-ef01-345678901234' })
  @Expose()
  deviceId: string;

  @ApiProperty({ example: 'Main Lobby Tablet' })
  @Expose()
  deviceName: string;

  @ApiProperty({ example: 'Ground Floor, Reception Area' })
  @Expose()
  location: string;

  @ApiProperty({ example: 'online' })
  @Expose()
  status: string;
}

export class AdminPresetUsageResponseDto {
  @ApiProperty({ example: 'f6a7b8c9-d0e1-2345-f012-456789012345' })
  @Expose()
  presetId: string;

  @ApiProperty({ type: [AdminPresetUsageDeviceResponseDto] })
  @Expose()
  @Type(() => AdminPresetUsageDeviceResponseDto)
  devices: AdminPresetUsageDeviceResponseDto[];

  @ApiProperty({ example: 2, description: 'Number of meeting rooms using this preset' })
  @Expose()
  roomCount: number;
}
