import 'reflect-metadata';
import UuidGenerator from '@/src/shared/domain/uuid/UuidGenerator';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import V4UuidGenerator from '@/src/shared/infrastructure/uuid/V4UuidGenerator';
import { Create } from '@/src/todo/application/create/Create';
import { List } from '@/src/todo/application/list/List';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { InMemoryTodoRepository } from '@/src/todo/infrastructure/InMemoryTodoRepository';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

export const container = new Container();

container
  .bind<TodoRepository>(SYMBOLS.TODO_REPOSITORY)
  .to(InMemoryTodoRepository)
  .inSingletonScope();

container.bind<Create>(SYMBOLS.TODO_CREATE).to(Create).inSingletonScope();
container.bind<List>(SYMBOLS.TODO_LIST).to(List).inSingletonScope();

container
  .bind<UuidGenerator>(SYMBOLS.UUID_GENERATOR)
  .to(V4UuidGenerator)
  .inSingletonScope();

export const { lazyInject } = getDecorators(container);
