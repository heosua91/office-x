import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class AdminMeetingRoomUpdateRequestDto {
  @ApiPropertyOptional({ example: 'Horizon Room' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  capacity?: number;

  @ApiPropertyOptional({ example: '3rd Floor, East Wing' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ example: 'Projector, Whiteboard, Video conferencing' })
  @IsOptional()
  @IsString()
  equipment?: string;

  @ApiPropertyOptional({ example: 'calendar-resource-id-abc123' })
  @IsOptional()
  @IsString()
  calendarResourceId?: string;

  @ApiPropertyOptional({ example: 'https://storage.example.com/maps/3f-east.png' })
  @IsOptional()
  @IsString()
  mapImageUrl?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isMultiDevice?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
