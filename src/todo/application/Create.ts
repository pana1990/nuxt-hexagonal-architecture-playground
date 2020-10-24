import UseCase from '@/src/shared/domain/use-case/UseCase';
import { TodoRepository } from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';

@injectable()
export class Create implements UseCase {
  constructor(
    @inject(SYMBOLS.TodoRepository)
    private readonly todoRepository: TodoRepository
  ) {}

  async execute(todo: string): Promise<void> {
    await this.todoRepository.add(todo);
  }
}
