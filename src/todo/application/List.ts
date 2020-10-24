import { TodoRepository } from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';

@injectable()
export class List {
  constructor(
    @inject(SYMBOLS.TodoRepository)
    private readonly todoRepository: TodoRepository
  ) {}

  execute(): string[] {
    return this.todoRepository.getAll();
  }
}
