import CommandHandler from '@/src/shared/domain/use-case/command/CommandHandler';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { CompleteCommand } from '@/src/todo/application/complete/CompleteCommand';
import TodoId from '@/src/todo/domain/TodoId';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class CompleteHandler implements CommandHandler {
  constructor(
    @inject(SYMBOLS.TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  dispatch(command: CompleteCommand): void {
    const todoId = new TodoId(command.todoId);

    this.todoRepository.find(todoId).then((todo) => {
      todo.done();
      this.todoRepository.save(todo).then();
    });
  }
}
