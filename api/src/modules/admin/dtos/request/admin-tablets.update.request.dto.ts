import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsObject, IsOptional, IsString, IsUUID } from 'class-validator';
import { AdminTabletPurpose } from './admin-tablets.create.request.dto';

export class AdminTabletUpdateRequestDto {
  @ApiPropertyOptional({ example: 'Main Lobby Tablet' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'Ground Floor, Reception Area' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ enum: AdminTabletPurpose })
  @IsOptional()
  @IsEnum(AdminTabletPurpose)
  purpose?: AdminTabletPurpose;

  @ApiPropertyOptional({ example: 'd4e5f6a7-b8c9-0123-def0-234567890123' })
  @IsOptional()
  @IsUUID()
  meetingRoomId?: string;

  @ApiPropertyOptional({ type: Object })
  @IsOptional()
  @IsObject()
  settings?: object;
}
