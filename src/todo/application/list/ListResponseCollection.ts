import ListResponse from '@/src/todo/application/list/ListResponse';
import Response from '@/src/shared/domain/use-case/query/Response';

export class ListResponseCollection implements Response {
  constructor(readonly data: ListResponse[]) {}
}
