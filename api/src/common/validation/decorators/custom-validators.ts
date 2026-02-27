import { Transform } from 'class-transformer';
import {
  isDateString,
  registerDecorator,
  type ValidationArguments,
  type ValidationOptions,
} from 'class-validator';

/**
 * Transform to trim whitespace from string values
 */
export function TrimWhitespace() {
  return Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
    return value;
  });
}

/**
 * Validator to check if string is not just whitespace
 */
export function IsNotEmptyString(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isNotEmptyString',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        validate(value: any) {
          if (typeof value !== 'string') return false;
          return value.trim().length > 0;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} cannot be empty or contain only whitespace`;
        },
      },
    });
  };
}

/**
 * Validator to check if date is in the past (before today)
 */
export function IsDateInPast(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isDateInPast',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        validate(value: any) {
          if (!value) return true; // Allow empty values if optional
          if (!isDateString(value)) return false; // Must be valid date string first

          const inputDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set to start of today

          return inputDate < today;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a date in the past`;
        },
      },
    });
  };
}

/**
 * Validator to check if birth date is reasonable (between 1900 and today)
 */
export function IsValidBirthDate(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isValidBirthDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        validate(value: any) {
          if (!value) return true; // Allow empty values if optional
          if (!isDateString(value)) return false; // Must be valid date string first

          const inputDate = new Date(value);
          const today = new Date();
          const minBirthYear = new Date('1900-01-01');

          return inputDate >= minBirthYear && inputDate < today;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid birth date between 1900 and today`;
        },
      },
    });
  };
}

/**
 * Validator to check if issued date is reasonable (not in future, not too old)
 */
export function IsValidIssuedDate(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isValidIssuedDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        validate(value: any) {
          if (!value) return true; // Allow empty values if optional
          if (!isDateString(value)) return false; // Must be valid date string first

          const inputDate = new Date(value);
          const today = new Date();
          const minIssuedYear = new Date('1990-01-01'); // IDs typically issued from 1990

          return inputDate >= minIssuedYear && inputDate <= today;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid issued date between 1990 and today`;
        },
      },
    });
  };
}
