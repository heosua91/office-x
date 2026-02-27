import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { HTTP_STATUS_TO_ERROR_CODE } from 'src/app/constants/error-codes.constant';
import { BaseExceptionFilter } from './base-exception.filter';

/**
 * Filter for handling HttpException instances
 * Provides consistent error responses for standard HTTP exceptions
 */
@Catch(HttpException)
export class HttpExceptionFilter extends BaseExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const errorCode =
      HTTP_STATUS_TO_ERROR_CODE[status] ||
      HTTP_STATUS_TO_ERROR_CODE[HttpStatus.INTERNAL_SERVER_ERROR];

    const exceptionResponse = exception.getResponse();
    const isObjectResponse = typeof exceptionResponse === 'object' && exceptionResponse !== null;

    const message = isObjectResponse
      ? (exceptionResponse as { message?: string }).message || exception.message
      : exception.message;

    const key = isObjectResponse ? (exceptionResponse as { key?: string }).key : undefined;

    // Send standardized error response
    this.sendErrorResponse(response, request, {
      statusCode: status,
      errorCode,
      message,
      key,
    });
  }
}
