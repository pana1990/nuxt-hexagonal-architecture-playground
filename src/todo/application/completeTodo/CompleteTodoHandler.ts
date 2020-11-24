import CommandHandler from '@/src/shared/domain/use-case/command/CommandHandler';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { CompleteTodoCommand } from '@/src/todo/application/completeTodo/CompleteTodoCommand';
import TodoId from '@/src/todo/domain/TodoId';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class CompleteTodoHandler implements CommandHandler {
  constructor(
    @inject(SYMBOLS.TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  dispatch(command: CompleteTodoCommand): void {
    const todoId = new TodoId(command.todoId);

    const todo = this.todoRepository.find(todoId);
    todo.done();

    this.todoRepository.save(todo);
  }
}
