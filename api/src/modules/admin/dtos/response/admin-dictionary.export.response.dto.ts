import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminDictionaryExportResponseDto {
  @ApiProperty({ example: 'https://signed.example.com/dictionary-export.csv' })
  @Expose()
  downloadUrl: string;
}
