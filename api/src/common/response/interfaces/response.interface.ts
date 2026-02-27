/**
 * Interface representing a single error item in error responses
 */
export interface IErrorItem {
  /**
   * Field name that caused the error
   */
  field: string;

  /**
   * List of error messages for the field
   */
  messages: string[];
}

/**
 * Interface for standardized error response
 */
export interface IErrorResponse {
  /**
   * Error code (typically HTTP status code)
   */
  code: string;

  /**
   * Main error message
   */
  message: string;

  /**
   * Optional list of field-specific errors
   */
  errors?: IErrorItem[];
}

/**
 * Base interface for all API responses
 */
export interface IResponse {
  /**
   * API version from request headers
   */
  apiVersion: string;

  /**
   * Request path
   */
  path: string;
}

/**
 * Interface for successful API responses containing data
 * @template T - Type of data returned
 */
export interface IResponseSuccess<T> extends IResponse {
  /**
   * Response data payload
   */
  data: T | T[];
}

/**
 * Interface for error API responses
 */
export interface IResponseError extends IResponse {
  /**
   * Error details
   */
  error: IErrorResponse;
}

/**
 * Interface for paginated data
 * @template T - Type of items in pagination
 */
export interface IResponsePagingPagination<T> {
  /**
   * Array of items for current page
   */
  items: T[];

  /**
   * Number of items per page
   */
  itemsPerPage: number;

  /**
   * Total number of items across all pages (omitted when not computed for performance)
   */
  total?: number;

  /**
   * Current page number (1-based)
   */
  currentPage?: number;

  /**
   * Total number of pages (omitted when total is not computed)
   */
  totalPages?: number;
}

/**
 * Interface for successful API responses with paginated data
 * @template T - Type of items in pagination
 */
export interface IResponsePagingSuccess<T> extends IResponseSuccess<IResponsePagingPagination<T>> {}
