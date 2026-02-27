import { HttpStatus } from '@nestjs/common';
import type { ValidationError } from 'class-validator';
import { COMMON_ERROR_CODES } from 'src/app/constants/error-codes.constant';
import type { ValidationFieldError } from '../interfaces/validation.interface';

/**
 * Custom exception for request validation errors
 * Used to standardize validation error responses across the application
 */
export class RequestValidationException extends Error {
  readonly httpStatus: HttpStatus = HttpStatus.UNPROCESSABLE_ENTITY;
  readonly statusCode: string = COMMON_ERROR_CODES.UNPROCESSABLE_ENTITY;
  readonly errors: ValidationFieldError[];

  constructor(errors: ValidationError[]) {
    super('Validation error');
    this.name = 'RequestValidationException';
    this.errors = this.flattenValidationErrors(errors);
  }

  /**
   * Converts class-validator's hierarchical validation errors into a flat array of field errors
   * @param validationErrors - The validation errors from class-validator
   * @returns A flat array of validation field errors
   */
  private flattenValidationErrors(validationErrors: ValidationError[]): ValidationFieldError[] {
    const errors: ValidationFieldError[] = [];

    for (const error of validationErrors) {
      if (error.constraints) {
        errors.push({
          field: error.property,
          messages: Object.values(error.constraints),
        });
      }

      if (error.children && error.children.length > 0) {
        errors.push(...this.flattenValidationErrors(error.children));
      }
    }

    return errors;
  }
}
