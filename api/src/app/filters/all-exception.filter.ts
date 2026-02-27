import { type ArgumentsHost, Catch, type ExceptionFilter, HttpStatus } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ErrorCode } from 'src/app/constants/error-codes.constant';
import { BaseExceptionFilter } from './base-exception.filter';

/**
 * Catch-all filter for handling any unhandled exceptions
 * This is the last line of defense for unexpected errors
 */
@Catch()
export class AllExceptionFilter extends BaseExceptionFilter implements ExceptionFilter {
  catch(_exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    // Send standardized error response
    this.sendErrorResponse(response, request, {
      statusCode: status,
      errorCode: ErrorCode.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    });
  }
}
