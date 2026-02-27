import {
  registerDecorator,
  type ValidationArguments,
  type ValidationOptions,
} from 'class-validator';
import { FILE_TYPE_TO_EXTENSIONS } from '../constants/file-mappings.constant';
import {
  createFileExtensionErrorMessage,
  getFileTypesFromValidationArgs,
  isExtensionValidForType,
} from '../utils/file-validation.util';

/**
 * Custom validator decorator that checks if a file extension is valid for a specific file type
 *
 * Example usage:
 * ```typescript
 * @IsFileExtensionValidForTypeInline('fileType', {
 *   [ENUM_FILE_TYPE.IMAGE]: ['jpg', 'png'],
 *   [ENUM_FILE_TYPE.DOCUMENT]: ['pdf', 'docx']
 * })
 * fileExtension: string;
 * ```
 *
 * @param fileTypeProperty - Name of the property containing the file type
 * @param fileTypeExtensionsMap - Mapping of file types to allowed extensions
 * @param validationOptions - Optional validation options
 * @returns Property decorator function
 */
export function IsFileExtensionValidForTypeInline(
  fileTypeProperty: string,
  fileTypeExtensionsMap: Record<string, string[]> = FILE_TYPE_TO_EXTENSIONS,
  validationOptions?: ValidationOptions
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isFileExtensionValidForTypeInline',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [fileTypeProperty, fileTypeExtensionsMap],
      validator: {
        /**
         * Validates if the extension is allowed for the specified file type
         */
        validate(value: string, args: ValidationArguments) {
          const [fileTypePropertyName, extensionsMap] = args.constraints as [
            string,
            Record<string, string[]>,
          ];
          const fileTypes = getFileTypesFromValidationArgs(args, fileTypePropertyName);

          return isExtensionValidForType(value, fileTypes, extensionsMap);
        },

        /**
         * Generates a descriptive error message when validation fails
         */
        defaultMessage(args: ValidationArguments) {
          const [fileTypePropertyName, extensionsMap] = args.constraints as [
            string,
            Record<string, string[]>,
          ];
          const fileTypes = getFileTypesFromValidationArgs(args, fileTypePropertyName);

          return createFileExtensionErrorMessage(args.property, fileTypes, extensionsMap);
        },
      },
    });
  };
}
