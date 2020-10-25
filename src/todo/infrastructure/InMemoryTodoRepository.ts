import { injectable } from 'inversify';
import TodoRepository from '@/src/todo/domain/TodoRepository';

@injectable()
export class InMemoryTodoRepository implements TodoRepository {
  private static _todos: string[] = [];

  add(task: string): Promise<void> {
    InMemoryTodoRepository._todos.push(task);

    return Promise.resolve();
  }

  getAll(): string[] {
    return InMemoryTodoRepository._todos;
  }
}
