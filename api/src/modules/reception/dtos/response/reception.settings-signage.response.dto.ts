import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export enum SignageSlideType {
  SLIDE_IMAGE = 'slide_image',
  SLIDE_VIDEO = 'slide_video',
}

export class SignageItemDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440010' })
  @Expose()
  id: string;

  @ApiProperty({ enum: SignageSlideType, example: SignageSlideType.SLIDE_IMAGE })
  @Expose()
  type: SignageSlideType;

  @ApiProperty({ example: 'https://cdn.example.com/signage/slide1.jpg' })
  @Expose()
  url: string;

  @ApiProperty({ example: 1 })
  @Expose()
  displayOrder: number;

  @ApiProperty({ example: 10, description: 'Seconds before advancing to the next slide' })
  @Expose()
  playIntervalSeconds: number;

  @ApiProperty({ example: null, nullable: true, description: 'Total duration in seconds (video only)' })
  @Expose()
  durationSeconds: number | null;
}

export class ReceptionSignageResponseDto {
  @ApiProperty({ type: [SignageItemDto] })
  @Expose()
  @Type(() => SignageItemDto)
  items: SignageItemDto[];
}
