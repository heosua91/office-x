import { type ArgumentsHost, Catch, type ExceptionFilter } from '@nestjs/common';
import type { Request, Response } from 'express';
import { RequestValidationException } from 'src/common/validation/exceptions/request.validation.exception';
import { BaseExceptionFilter } from './base-exception.filter';

/**
 * Filter for handling validation exceptions
 * Provides detailed validation error information in the response
 */
@Catch(RequestValidationException)
export class ValidationExceptionFilter extends BaseExceptionFilter implements ExceptionFilter {
  catch(exception: RequestValidationException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.httpStatus;

    // Send standardized error response with validation details
    this.sendErrorResponse(response, request, {
      statusCode: status,
      errorCode: exception.statusCode,
      message: 'Validation failed',
      errors: exception.errors,
    });
  }
}
