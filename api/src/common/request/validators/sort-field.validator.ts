import {
  registerDecorator,
  type ValidationArguments,
  type ValidationOptions,
} from 'class-validator';

export function IsValidSortFields(allowedFields: string[], validationOptions?: ValidationOptions) {
  return (object, propertyName: string) => {
    registerDecorator({
      name: 'isValidSortFields',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown, _args: ValidationArguments) {
          if (typeof value !== 'string') return false;
          const fields = value.split(',').map((f: string) => f.trim().replace(/^-/, ''));
          return fields.every((field) => allowedFields.includes(field));
        },
        defaultMessage(_args: ValidationArguments) {
          return `Invalid sort field. Allowed fields: ${allowedFields.join(', ')}`;
        },
      },
    });
  };
}
