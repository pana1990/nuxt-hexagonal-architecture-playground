import Response from '@/src/shared/domain/use-case/query/Response';

export default class ListResponse implements Response {
  constructor(readonly todoList: string[]) {}
}
