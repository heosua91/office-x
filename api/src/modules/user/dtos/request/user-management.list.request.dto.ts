import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from 'src/common/constants/pagination.constant';
import { CreateSortDto } from 'src/common/request/dtos/sort.dto';

const ALLOWED_SORT_FIELDS = ['passwordChangedAt', 'createdAt'];

const UserListSortDto = CreateSortDto(ALLOWED_SORT_FIELDS);

/**
 * Request DTO for listing users with pagination and sorting
 * Extends PaginationDto and includes sort validation
 */
export class UserListRequestDto extends UserListSortDto {
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
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Number of items per page (default: 20, options: 20, 50, 100)',
    example: 20,
    enum: [20, 50, 100],
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Limit must be an integer number' })
  @Min(1, { message: 'Limit must be a positive number' })
  limit?: number = DEFAULT_LIMIT;
}
