import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ClientsImportRequestDto {
  @ApiProperty({ example: 'https://bucket.s3.amazonaws.com/uploads/clients.csv?signature=mock', description: 'Signed S3 URL of the uploaded CSV file' })
  @IsString()
  fileUrl: string;

  @ApiProperty({ example: 'clients.csv' })
  @IsString()
  fileName: string;
}
