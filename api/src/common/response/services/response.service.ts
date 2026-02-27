import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { asyncLocalStorage } from 'src/async-storage';
import type {
  AppErrorResponse,
  AppResponseError,
  AppResponsePagingPagination,
  AppResponsePagingSuccess,
  AppResponseSuccess,
} from '../dtos/response.dto';

/**
 * Service for generating standardized API responses
 *
 * This service provides methods for creating consistent response objects
 * for success, error, and paginated responses throughout the application.
 */
@Injectable()
export class ResponseService {
  /**
   * Creates a standardized success response object
   *
   * @param data - Data to include in the response
   * @param cls - Optional class constructor for data transformation
   * @returns Standardized success response object
   */
  success<T>(data: T, cls?: new () => T): AppResponseSuccess<T>;
  success<T>(data: T[], cls?: new () => T): AppResponseSuccess<T[]>;
  success<T>(data: T | T[], cls?: new () => T): AppResponseSuccess<T | T[]> {
    const request = asyncLocalStorage.getStore()?.request;

    if (!request) {
      throw new Error('Request context not available in asyncLocalStorage');
    }

    return {
      apiVersion: (request.headers['accept-version'] ?? '1').toString(),
      path: request.path || '',
      data: this.transformData(data, cls),
    };
  }

  /**
   * Creates a standardized paginated success response object
   *
   * @param data - Pagination data including items and metadata
   * @param cls - Optional class constructor for item transformation
   * @returns Standardized paginated success response object
   */
  successPaging<T>(
    data: AppResponsePagingPagination<T>,
    cls?: new () => T
  ): AppResponsePagingSuccess<T> {
    const request = asyncLocalStorage.getStore()?.request;

    if (!request) {
      throw new Error('Request context not available in asyncLocalStorage');
    }

    return {
      apiVersion: (request.headers['accept-version'] ?? '1').toString(),
      path: request.path || '',
      data: {
        ...data,
        items: this.transformData(data.items, cls) as T[],
      },
    };
  }

  /**
   * Creates a standardized error response object
   *
   * @param error - Error details to include in the response
   * @returns Standardized error response object
   */
  failed(error: AppErrorResponse = null): AppResponseError {
    const request = asyncLocalStorage.getStore()?.request;

    if (!request) {
      throw new Error('Request context not available in asyncLocalStorage');
    }

    return {
      apiVersion: (request.headers['accept-version'] ?? '1').toString(),
      path: request.path || '',
      error,
    };
  }

  /**
   * Helper method to transform data using class-transformer
   *
   * @private
   * @param data - Data to transform
   * @param cls - Class constructor for transformation
   * @returns Transformed data
   */
  private transformData<T>(data: T | T[], cls?: new () => T): T | T[] {
    if (!cls) {
      return data;
    }

    return Array.isArray(data)
      ? data.map((item) => plainToClass(cls, item, { excludeExtraneousValues: true }))
      : plainToClass(cls, data, { excludeExtraneousValues: true });
  }
}
