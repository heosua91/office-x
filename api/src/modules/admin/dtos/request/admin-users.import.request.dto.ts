import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AdminUsersImportRequestDto {
  @ApiProperty({ example: 'https://storage.example.com/uploads/users.csv' })
  @IsString()
  @IsNotEmpty()
  fileUrl: string;

  @ApiProperty({ example: 'users.csv' })
  @IsString()
  @IsNotEmpty()
  fileName: string;
}
