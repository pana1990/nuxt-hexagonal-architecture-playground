import CommandHandler from '@/src/shared/domain/use-case/command/CommandHandler';
import UuidGenerator from '@/src/shared/domain/uuid/UuidGenerator';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import CreateCommand from '@/src/todo/application/create/CreateCommand';
import Todo from '@/src/todo/domain/Todo';
import TodoBody from '@/src/todo/domain/TodoBody';
import TodoId from '@/src/todo/domain/TodoId';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class Create implements CommandHandler {
  constructor(
    @inject(SYMBOLS.TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository,
    @inject(SYMBOLS.UUID_GENERATOR)
    private readonly uuidGenerator: UuidGenerator
  ) {}

  dispatch(command: CreateCommand): Promise<void> {
    const todoId = new TodoId(this.uuidGenerator.generate());
    const todoBody = new TodoBody(command.todoBody);
    const todo = Todo.create(todoId, todoBody);

    return this.todoRepository.add(todo);
  }
}
