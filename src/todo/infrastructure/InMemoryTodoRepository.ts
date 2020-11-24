import Todo from '@/src/todo/domain/Todo';
import TodoId from '@/src/todo/domain/TodoId';
import { injectable } from 'inversify';
import TodoRepository from '@/src/todo/domain/TodoRepository';

@injectable()
export class InMemoryTodoRepository implements TodoRepository {
  private readonly _todos = new Map<string, Todo>();

  save(todo: Todo): void {
    this._todos.set(todo.id.value, todo);
  }

  find(todoId: TodoId): Todo | undefined {
    return this._todos.get(todoId.value);
  }

  getAll(): Todo[] {
    return Array.from(this._todos.values());
  }
}
