import {
  registerDecorator,
  type ValidationArguments,
  type ValidationOptions,
} from 'class-validator';
import type { ENUM_FILE_TYPE } from '../enums/file.enum';
import { createFileTypeErrorMessage, isValidFileType } from '../utils/file-validation.util';

/**
 * Custom validator decorator that checks if a file type is valid
 *
 * Example usage:
 * ```typescript
 * @IsFileTypeValid([ENUM_FILE_TYPE.IMAGE, ENUM_FILE_TYPE.DOCUMENT])
 * fileType: string;
 * ```
 *
 * @param fileTypes - Array of allowed file types
 * @param validationOptions - Optional validation options
 * @returns Property decorator function
 */
export function IsFileTypeValid(
  fileTypes: ENUM_FILE_TYPE[],
  validationOptions?: ValidationOptions
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'IsFileTypeValid',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [fileTypes],
      validator: {
        /**
         * Validates if the input value is an allowed file type
         * Works with both string and string array inputs
         */
        validate(value: string | string[], args: ValidationArguments) {
          const [allowedTypes] = args.constraints as [ENUM_FILE_TYPE[]];
          return isValidFileType(value, allowedTypes);
        },

        /**
         * Generates a descriptive error message when validation fails
         */
        defaultMessage(args: ValidationArguments) {
          const [allowedTypes] = args.constraints as [ENUM_FILE_TYPE[]];
          return createFileTypeErrorMessage(args.property, allowedTypes);
        },
      },
    });
  };
}
