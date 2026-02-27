import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from 'src/common/constants/pagination.constant';

export class PaginationDto {
  @ApiProperty({
    name: 'page',
    type: 'number',
    required: false,
    description: 'Page number (default: 1)',
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Page must be an integer number' })
  @Min(1, { message: 'Page must be a positive number' })
  page?: number = DEFAULT_PAGE;

  @ApiProperty({
    name: 'offset',
    type: 'number',
    required: false,
    description: 'Offset (default: 0)',
    example: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Offset must be an integer number' })
  @Min(0, { message: 'Offset must be a non-negative number' })
  offset?: number;

  @ApiProperty({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Number of items per page (default: 10)',
    example: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Limit must be an integer number' })
  @Min(1, { message: 'Limit must be a positive number' })
  limit?: number = DEFAULT_LIMIT;
}
