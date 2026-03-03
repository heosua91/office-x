import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminUserResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  email: string;

  @ApiProperty()
  @Expose()
  role: string;

  @ApiProperty()
  @Expose()
  department?: string;
}

export class AdminRoomResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  floor: string;

  @ApiProperty()
  @Expose()
  capacity: number;

  @ApiProperty()
  @Expose()
  qrCodeUrl?: string;
}

export class AdminImportLogResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  fileName: string;

  @ApiProperty()
  @Expose()
  status: string;

  @ApiProperty()
  @Expose()
  processedCount: number;

  @ApiProperty()
  @Expose()
  errorCount: number;

  @ApiProperty()
  @Expose()
  createdAt: Date;
}

