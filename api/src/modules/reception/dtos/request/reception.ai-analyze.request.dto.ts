import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class ReceptionAiAnalyzeRequestDto {
  @ApiProperty({
    example: 'https://storage.example.com/audio/clip-001.mp3',
    required: false,
    description: 'Pre-signed URL of the recorded audio. At least one of audioUrl, imageUrl, or transcript is required.',
  })
  @IsOptional()
  @IsUrl()
  audioUrl?: string;

  @ApiProperty({
    example: 'https://storage.example.com/images/slip-001.jpg',
    required: false,
    description: 'Pre-signed URL of a captured image (delivery slip / vendor badge). At least one required.',
  })
  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @ApiProperty({
    example: 'Package delivery for the engineering team',
    required: false,
    description: 'Raw text transcript from STT or manual entry. At least one required.',
  })
  @IsOptional()
  @IsString()
  transcript?: string;
}
