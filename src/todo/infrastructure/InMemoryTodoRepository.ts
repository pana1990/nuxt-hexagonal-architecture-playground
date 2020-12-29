import Todo from '@/src/todo/domain/Todo';
import TodoId from '@/src/todo/domain/TodoId';
import { injectable } from 'inversify';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { TodoNotFoundError } from '@/src/todo/domain/TodoNotFoundError';

@injectable()
export class InMemoryTodoRepository implements TodoRepository {
  private readonly _todos = new Map<string, Todo>();

  save(todo: Todo): void {
    this._todos.set(todo.id.value, todo);
  }

  find(todoId: TodoId): Todo {
    const todo = this._todos.get(todoId.value);

    if (!todo) {
      throw new TodoNotFoundError(todoId.value);
    }

    return todo;
  }

  getAll(): Todo[] {
    return Array.from(this._todos.values());
  }
}
