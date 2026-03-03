import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class OfficeMeetingAiResponseDto {
  @ApiProperty()
  @Expose()
  transcript: string;

  @ApiProperty({
    description: 'Detailed transcript segments with timing and speaker',
    example: [{ id: 1, startTime: 0, endTime: 10, speaker: 'Host', text: 'Welcome' }],
  })
  @Expose()
  segments: any[];

  @ApiProperty()
  @Expose()
  summary: string;


  @ApiProperty({ type: [String] })
  @Expose()
  actionItems: string[];
}
