import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class AdminMeetingRoomCreateRequestDto {
  @ApiProperty({ example: 'Horizon Room' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 10, description: 'Seating capacity' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  capacity: number;

  @ApiPropertyOptional({ example: '3rd Floor, East Wing' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ example: 'Projector, Whiteboard, Video conferencing', description: 'Comma-separated list of equipment' })
  @IsOptional()
  @IsString()
  equipment?: string;

  @ApiPropertyOptional({ example: 'calendar-resource-id-abc123', description: 'Google/Outlook calendar resource ID' })
  @IsOptional()
  @IsString()
  calendarResourceId?: string;

  @ApiPropertyOptional({ example: 'https://storage.example.com/maps/3f-east.png' })
  @IsOptional()
  @IsString()
  mapImageUrl?: string;

  @ApiPropertyOptional({ example: false, description: 'Whether the room supports multiple tablet devices' })
  @IsOptional()
  @IsBoolean()
  isMultiDevice?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
