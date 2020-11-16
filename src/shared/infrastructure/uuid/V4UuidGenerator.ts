import UuidGenerator from '@/src/shared/domain/uuid/UuidGenerator';
import { injectable } from 'inversify';
import { v4 } from 'uuid';

@injectable()
export default class V4UuidGenerator implements UuidGenerator {
  generate(): string {
    return v4();
  }
}
