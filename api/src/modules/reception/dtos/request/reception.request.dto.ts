import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GuestMeetingRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  guestName: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  guestEmail: string;

  @ApiProperty()
  @IsNotEmpty()
  startTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  endTime: Date;
}

export class ReceptionAuthRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  deviceToken: string;
}

export class ReceptionCheckInRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  qrCode: string;
}

export class ReceptionNotifyHostRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  meetingId: number;
}
