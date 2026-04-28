import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ReceptionAiAnalyzeResponseDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440040', nullable: true, required: false })
  @Expose()
  matchedDepartmentId?: string;

  @ApiProperty({ example: 'Engineering', nullable: true, required: false })
  @Expose()
  matchedDepartmentName?: string;

  @ApiProperty({ example: false })
  @Expose()
  isReject: boolean;

  @ApiProperty({ example: null, nullable: true, required: false })
  @Expose()
  rejectMessage?: string;

  @ApiProperty({ example: 'Package delivery for the engineering team from Shopee Express' })
  @Expose()
  transcript: string;

  @ApiProperty({ example: 0.93, description: 'AI confidence score between 0 and 1' })
  @Expose()
  confidence: number;
}
