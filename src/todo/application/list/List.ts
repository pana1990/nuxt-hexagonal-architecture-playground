import Query from '@/src/shared/domain/use-case/query/Query';
import QueryHandler from '@/src/shared/domain/use-case/query/QueryHandler';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import ListResponse from '@/src/todo/application/list/ListResponse';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class List implements QueryHandler {
  constructor(
    @inject(SYMBOLS.TodoRepository)
    private readonly todoRepository: TodoRepository
  ) {}

  ask(query?: Query): ListResponse {
    const todos = this.todoRepository.getAll();
    return new ListResponse(todos);
  }
}
