import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsObject, IsOptional, IsString, IsUUID } from 'class-validator';

export enum AdminTabletPurpose {
  RECEPTION = 'reception',
  ROOM_DISPLAY = 'room_display',
}

export class AdminTabletCreateRequestDto {
  @ApiPropertyOptional({ example: 'Main Lobby Tablet' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Ground Floor, Reception Area' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ enum: AdminTabletPurpose, example: AdminTabletPurpose.RECEPTION })
  @IsEnum(AdminTabletPurpose)
  purpose: AdminTabletPurpose;

  @ApiPropertyOptional({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123', description: 'Required when purpose is room_display' })
  @IsOptional()
  @IsUUID()
  meetingRoomId?: string;

  @ApiPropertyOptional({ type: Object, description: 'Device-specific configuration settings' })
  @IsOptional()
  @IsObject()
  settings?: object;
}
