import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ReceptionVisitNotifyDepartmentResponseDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440050' })
  @Expose()
  visitId: string;

  @ApiProperty({ example: 3, description: 'Number of department members dispatched' })
  @Expose()
  dispatchCount: number;

  @ApiProperty({ example: 'notifying' })
  @Expose()
  status: 'notifying';
}
