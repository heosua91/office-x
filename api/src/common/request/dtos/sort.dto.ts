import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IsValidSortFields } from '../validators/sort-field.validator';

export class SortDto {
  @ApiProperty({
    name: 'sort',
    type: 'string',
    required: false,
    description: 'Sorting parameter (format: field1,-field2)',
    example: 'field1,-field2',
  })
  @IsOptional()
  @IsString({ message: 'Sort must be a comma-separated string' })
  sort?: string;
}

export function CreateSortDto(allowedFields: string[]) {
  class ValidateSortDto extends SortDto {
    @ApiProperty({
      name: 'sort',
      type: 'string',
      required: false,
      description: 'Sorting parameter (format: field1,-field2)',
      example: 'field1,-field2',
    })
    @IsOptional()
    @IsString({ message: 'Sort must be a comma-separated string' })
    @IsValidSortFields(allowedFields, {
      message: `Sort fields must be one of: ${allowedFields.join(', ')}`,
    })
    sort?: string;
  }

  return ValidateSortDto;
}
