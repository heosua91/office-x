import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class OfficeMeetingAiResponseDto {
  @ApiProperty()
  @Expose()
  transcript: string;

  @ApiProperty()
  @Expose()
  summary: string;

  @ApiProperty({ type: [String] })
  @Expose()
  actionItems: string[];
}
