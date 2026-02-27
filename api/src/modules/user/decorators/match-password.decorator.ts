import { ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator';

export function Match(property: string, validationOptions?: ValidationOptions) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'match',
      target: object.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          const relatedValue = (args.object as any)[relatedPropertyName];
          return value === relatedValue;
        },
        defaultMessage(args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          return `${propertyName} must match ${relatedPropertyName}`;
        },
      },
    });
  };
}
