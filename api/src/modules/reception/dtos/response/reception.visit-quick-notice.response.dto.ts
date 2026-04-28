import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ReceptionVisitQuickNoticeResponseDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440030' })
  @Expose()
  visitId: string;

  @ApiProperty({ example: 'notifying' })
  @Expose()
  status: 'notifying';
}
