import DomainError from '@/src/shared/domain/error/DomainError';
// @ts-ignore
import { v4 } from 'uuid';

class UuidIsInvalid extends DomainError {
  constructor(value: string) {
    super(`Uuid ${value} is invalid`);
  }
}

export default abstract class Uuid {
  readonly value: string;

  protected constructor(private value: string) {
    Uuid.ensureIsValidUuid(value);

    this.value = value;
  }

  private static ensureIsValidUuid(value: string) {
    if (!v4().validate(value)) {
      throw new UuidIsInvalid(value);
    }
  }
}
