import type { Request, Response } from 'express';
import type { AppErrorItem } from 'src/common/response/dtos/response.dto';

/**
 * Error response data structure
 */
export interface ErrorResponseData {
  statusCode: number;
  errorCode: string;
  message: string;
  key?: string;
  errors?: AppErrorItem[];
}

/**
 * Base exception filter with shared functionality for all exception filters
 * Provides common methods for error handling and response formatting
 */
export abstract class BaseExceptionFilter {
  /**
   * Get the request ID from request headers or generate a fallback
   */
  protected getRequestId(request: Request): string {
    return (request.headers['request-id'] as string) || 'unknown';
  }

  /**
   * Get the API version from request headers or use default
   */
  protected getApiVersion(request: Request): string {
    return (request.headers['accept-version'] as string) || '1';
  }

  /**
   * Send a standardized error response
   */
  protected sendErrorResponse(
    response: Response,
    request: Request,
    errorData: ErrorResponseData
  ): void {
    const { statusCode, errorCode, message, key, errors } = errorData;
    const apiVersion = this.getApiVersion(request);

    response.status(statusCode).json({
      apiVersion,
      path: request.path,
      error: {
        code: errorCode,
        message,
        ...(key && { key }),
        ...(errors && { errors }),
      },
    });
  }
}
