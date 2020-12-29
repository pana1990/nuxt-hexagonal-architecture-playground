import DomainError from '@/src/shared/domain/error/DomainError';
import { v4, validate } from 'uuid';

class UuidIsInvalid extends DomainError {
  constructor(value: string) {
    super(`Uuid ${value} is invalid`);
  }
}

export default abstract class Uuid {
  readonly value: string;

  protected constructor(value: string) {
    Uuid.ensureIsValidUuid(value);
    this.value = value;
  }

  private static ensureIsValidUuid(value: string) {
    if (!validate(value)) {
      throw new UuidIsInvalid(value);
    }
  }
}
