/**
 * Allowed characters for username: 半角英数字（大文字・小文字）、記号（!@&*?#$+-/=%）
 * Only alphanumeric (uppercase/lowercase) and specific symbols are allowed
 */
export const USERNAME_ALLOWED_CHARACTERS_REGEX = /^[a-zA-Z\d!@&*?#$+\-\/=%]*$/;

/**
 * Username constraints
 */
export const USERNAME_CONSTRAINTS = {
  minLength: 4,
  maxLength: 32,
} as const;

/**
 * Name constraints (user display name)
 */
export const NAME_CONSTRAINTS = {
  maxLength: 32,
} as const;
