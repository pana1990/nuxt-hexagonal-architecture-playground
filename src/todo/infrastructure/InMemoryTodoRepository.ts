import Todo from '@/src/todo/domain/Todo';
import { injectable } from 'inversify';
import TodoRepository from '@/src/todo/domain/TodoRepository';

@injectable()
export class InMemoryTodoRepository implements TodoRepository {
  private static _todos: Todo[] = [];

  add(todo: Todo): Promise<void> {
    InMemoryTodoRepository._todos.push(todo);

    return Promise.resolve();
  }

  getAll(): Todo[] {
    return InMemoryTodoRepository._todos;
  }
}
