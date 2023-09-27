import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'uniqueArrayValues', async: false })
export class UniqueArrayValuesConstraint
  implements ValidatorConstraintInterface
{
  validate(values: any[]) {
    return values.length === new Set(values).size;
  }

  defaultMessage() {
    return 'Array values must be unique.';
  }
}

export function UniqueArrayValues(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueArrayValuesConstraint,
    });
  };
}
