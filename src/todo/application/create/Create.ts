import CommandHandler from '@/src/shared/domain/use-case/command/CommandHandler';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import CreateCommand from '@/src/todo/application/create/CreateCommand';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class Create implements CommandHandler {
  constructor(
    @inject(SYMBOLS.TodoRepository)
    private readonly todoRepository: TodoRepository
  ) {}

  dispatch(command: CreateCommand): Promise<void> {
    return this.todoRepository.add(command.todo);
  }
}
