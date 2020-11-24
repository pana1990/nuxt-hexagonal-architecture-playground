import Response from '@/src/shared/domain/use-case/query/Response';

export default class ListResponse implements Response {
  private readonly _createdAt: Date;

  constructor(
    readonly id: string,
    readonly body: string,
    readonly isDone: boolean,
    createdAt: Date
  ) {
    this._createdAt = createdAt;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}
