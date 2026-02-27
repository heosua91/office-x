/**
 * Represents a validation error for a specific field
 * Used in API responses to provide detailed validation failures
 */
export interface ValidationFieldError {
  /** The name of the field that failed validation */
  field: string;

  /** List of error messages for this field */
  messages: string[];
}

/**
 * Represents a complete validation response structure
 * Used to standardize validation error responses
 */
export interface ValidationErrorResponse {
  /** Validation error code */
  code: string;

  /** General validation error message */
  message: string;

  /** Individual field validation errors */
  validationErrors: ValidationFieldError[];
}
