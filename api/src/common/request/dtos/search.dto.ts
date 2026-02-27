import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class SearchDto {
  @ApiProperty({
    name: 'search',
    type: 'string',
    required: false,
    description: 'Search parameter',
    example: 'Test',
  })
  @IsOptional()
  @IsString({ message: 'Search must be a string' })
  @MaxLength(255, { message: 'Search must be at most 255 characters' })
  search?: string;
}
