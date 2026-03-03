import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RoomLinkRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  deviceToken: string;
}

export class RoomConsentRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  participantId: number;

  @ApiProperty()
  @IsNotEmpty()
  isConsented: boolean;
}

export class RoomEventRequestDto {
  @ApiProperty({ enum: ['MEMO', 'REACTION', 'MARKER'] })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({ description: 'Timestamp in seconds since meeting start' })
  @IsOptional()
  timestampInMeeting?: number;
}

