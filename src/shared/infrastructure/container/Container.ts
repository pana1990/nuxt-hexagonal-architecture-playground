import 'reflect-metadata';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { TodoRepository } from '@/src/todo/domain/TodoRepository';
import { InMemoryTodoRepository } from '@/src/todo/infrastructure/InMemoryTodoRepository';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

export const container = new Container();

container
  .bind<TodoRepository>(SYMBOLS.TodoRepository)
  .to(InMemoryTodoRepository)
  .inSingletonScope();

export const { lazyInject } = getDecorators(container);
