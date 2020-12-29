import Response from '@/src/shared/domain/use-case/query/Response';

export default class ListResponse implements Response {
  constructor(
    readonly id: string,
    readonly body: string,
    readonly createdAt: Date,
    readonly isDone: boolean
  ) {}
}
