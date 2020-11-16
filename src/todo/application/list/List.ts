import Query from '@/src/shared/domain/use-case/query/Query';
import QueryHandler from '@/src/shared/domain/use-case/query/QueryHandler';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import ListResponse from '@/src/todo/application/list/ListResponse';
import Todo from '@/src/todo/domain/Todo';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class List implements QueryHandler {
  constructor(
    @inject(SYMBOLS.TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  ask(query?: Query): ListResponse {
    const todos = this.todoRepository.getAll();

    return new ListResponse(todos.map(List.mappingTodosToArray()));
  }

  private static mappingTodosToArray() {
    return (todo: Todo): string => {
      return todo.body.value;
    };
  }
}
