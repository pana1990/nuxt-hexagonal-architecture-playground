import 'reflect-metadata';
import UuidGenerator from '@/src/shared/domain/uuid/UuidGenerator';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import V4UuidGenerator from '@/src/shared/infrastructure/uuid/V4UuidGenerator';
import { CreateHandler } from '@/src/todo/application/create/CreateHandler';
import { ListHandler } from '@/src/todo/application/list/ListHandler';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { InMemoryTodoRepository } from '@/src/todo/infrastructure/InMemoryTodoRepository';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

export const container = new Container();

container
  .bind<TodoRepository>(SYMBOLS.TODO_REPOSITORY)
  .to(InMemoryTodoRepository)
  .inSingletonScope();

container
  .bind<CreateHandler>(SYMBOLS.TODO_CREATE)
  .to(CreateHandler)
  .inSingletonScope();
container
  .bind<ListHandler>(SYMBOLS.TODO_LIST)
  .to(ListHandler)
  .inSingletonScope();

container
  .bind<UuidGenerator>(SYMBOLS.UUID_GENERATOR)
  .to(V4UuidGenerator)
  .inSingletonScope();

export const { lazyInject } = getDecorators(container);
