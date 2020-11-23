import CommandHandler from '@/src/shared/domain/use-case/command/CommandHandler';
import UuidGenerator from '@/src/shared/domain/uuid/UuidGenerator';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import TodoId from '@/src/todo/domain/TodoId';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class CheckHandler implements CommandHandler {
  constructor(
    @inject(SYMBOLS.TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository,
    @inject(SYMBOLS.UUID_GENERATOR)
    private readonly uuidGenerator: UuidGenerator
  ) {}

  dispatch(command: CheckCommand): Promise<void> {
    const todoId = new TodoId(command);
    const todo = this.todoRepository.find(todoId);
    todo.done();
    this.todoRepository.save(todo);

    return Promise.resolve();
  }
}
