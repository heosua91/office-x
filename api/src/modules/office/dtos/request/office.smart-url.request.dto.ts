import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class OfficeSmartUrlRequestDto {
  @ApiProperty({
    example: 1,
    description: 'Meeting AI template ID',
  })
  @IsNotEmpty()
  templateId: number;

  @ApiProperty({
    example: 'Guest Meeting',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}
