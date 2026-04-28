import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AdminMeetingRoomsImportRequestDto {
  @ApiProperty({ example: 'https://storage.example.com/uploads/rooms.csv' })
  @IsString()
  @IsNotEmpty()
  fileUrl: string;

  @ApiProperty({ example: 'rooms.csv' })
  @IsString()
  @IsNotEmpty()
  fileName: string;
}
