import { injectable } from 'inversify';
import { TodoRepository } from '@/src/todo/domain/TodoRepository';
import { todoStore } from '@/store';

@injectable()
export class InMemoryTodoRepository implements TodoRepository {
  add(task: string): Promise<void> {
    todoStore.addTodo(task);
    return Promise.resolve();
  }

  getAll(): string[] {
    return todoStore.todos;
  }
}
