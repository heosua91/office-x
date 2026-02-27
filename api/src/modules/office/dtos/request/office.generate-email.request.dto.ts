import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class OfficeGenerateEmailRequestDto {
  @ApiProperty({
    example: 'recipient@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  recipientEmail: string;
}
