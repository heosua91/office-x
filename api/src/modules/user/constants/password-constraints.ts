/**
 * Password validation utilities
 * Single source of truth for password validation rules and regex patterns
 */

/**
 * Allowed characters: 半角英数字（大文字・小文字）、記号（!@&*?#$+-/=%）
 * Only alphanumeric (uppercase/lowercase) and specific symbols are allowed
 */
export const ALLOWED_CHARACTERS_REGEX = /^[a-zA-Z\d!@&*?#$+\-\/=%]*$/;

/**
 * Password requirements regex:
 * - Must contain at least one lowercase letter
 * - Must contain at least one uppercase letter
 * - Must contain at least one number
 * - Allowed special characters: !@&*?#$+-/=%=
 */
export const PASSWORD_REQUIREMENTS_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@&*?#$+\-\/=%]*$/;

/**
 * Password constraints
 */
export const PASSWORD_CONSTRAINTS = {
  minLength: 8,
  maxLength: 32,
} as const;
