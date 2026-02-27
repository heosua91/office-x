import { ApiProperty } from '@nestjs/swagger';
import type {
  IErrorItem,
  IErrorResponse,
  IResponse,
  IResponseError,
  IResponsePagingPagination,
  IResponseSuccess,
} from '../interfaces/response.interface';

/**
 * DTO for error item in API responses
 * Used for field-specific validation errors
 */
export class AppErrorItem implements IErrorItem {
  @ApiProperty({
    required: true,
    example: 'email',
    description: 'Field that caused the error',
  })
  field: string;

  @ApiProperty({
    required: true,
    description: 'Error messages for the field',
    example: ['Email is required'],
    isArray: true,
    type: [String],
  })
  messages: string[];
}

/**
 * DTO for standardized error response
 */
export class AppErrorResponse implements IErrorResponse {
  @ApiProperty({
    required: true,
    description: 'Error code (typically HTTP status code)',
    example: '422',
  })
  code: string;

  @ApiProperty({
    required: true,
    description: 'Main error message',
    example: 'Validation failed',
  })
  message: string;

  @ApiProperty({
    required: false,
    description: 'List of field-specific errors',
    type: [AppErrorItem],
    isArray: true,
  })
  errors?: AppErrorItem[];
}

/**
 * Base DTO for all API responses
 */
export class AppResponse implements IResponse {
  @ApiProperty({
    required: true,
    description: 'API version from request headers',
    example: '1',
  })
  apiVersion: string;

  @ApiProperty({
    required: true,
    description: 'Request path',
    example: '/users',
  })
  path: string;
}

/**
 * DTO for successful API responses containing data
 * @template T - Type of data returned
 */
export class AppResponseSuccess<T> extends AppResponse implements IResponseSuccess<T> {
  @ApiProperty({
    required: true,
    description: 'Response data payload',
  })
  data: T | T[];
}

/**
 * DTO for error API responses
 */
export class AppResponseError extends AppResponse implements IResponseError {
  @ApiProperty({
    required: true,
    description: 'Error details',
    type: AppErrorResponse,
  })
  error: AppErrorResponse;
}

/**
 * DTO for paginated data
 * @template T - Type of items in pagination
 */
export class AppResponsePagingPagination<T> implements IResponsePagingPagination<T> {
  @ApiProperty({
    required: true,
    description: 'Array of items for current page',
    isArray: true,
  })
  items: T[];

  @ApiProperty({
    required: true,
    description: 'Number of items per page',
    example: 10,
    type: Number,
  })
  itemsPerPage: number;

  @ApiProperty({
    required: false,
    description:
      'Total number of items across all pages (omitted when not computed for performance)',
    example: 100,
    type: Number,
  })
  total?: number;

  @ApiProperty({
    required: false,
    description: 'Current page number (1-based)',
    example: 1,
    type: Number,
  })
  currentPage?: number;

  @ApiProperty({
    required: false,
    description: 'Total number of pages (omitted when total is not computed)',
    example: 10,
    type: Number,
  })
  totalPages?: number;
}

/**
 * DTO for successful API responses with paginated data
 * @template T - Type of items in pagination
 */
export class AppResponsePagingSuccess<T> extends AppResponseSuccess<
  AppResponsePagingPagination<T>
> {}
