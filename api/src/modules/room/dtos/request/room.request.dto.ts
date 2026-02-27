import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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
