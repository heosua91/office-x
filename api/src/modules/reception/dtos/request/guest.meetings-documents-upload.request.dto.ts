import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsNotEmpty, IsString, Min, ValidateNested } from 'class-validator';

export class FileUploadItemDto {
  @ApiProperty({ example: 'nda_signed.pdf' })
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @ApiProperty({ example: 204800, description: 'File size in bytes' })
  @IsInt()
  @Min(1)
  fileSizeBytes: number;

  @ApiProperty({ example: 'application/pdf' })
  @IsString()
  @IsNotEmpty()
  fileType: string;
}

export class GuestMeetingsDocumentsUploadRequestDto {
  @ApiProperty({ type: [FileUploadItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FileUploadItemDto)
  files: FileUploadItemDto[];
}
