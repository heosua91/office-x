import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AdminAiTemplateTestResponseDto {
  @ApiProperty({ example: '- Q2 roadmap discussed\n- Budget allocation for engineering reviewed\n- Alice to send revised proposal by Friday' })
  @Expose()
  output: string;

  @ApiProperty({ example: 1240, description: 'Elapsed time in milliseconds' })
  @Expose()
  durationMs: number;
}
