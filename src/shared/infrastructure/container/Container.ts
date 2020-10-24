import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { Create } from '@/src/todo/application/Create';
import { List } from '@/src/todo/application/List';
import { TodoRepository } from '@/src/todo/domain/TodoRepository';
import { InMemoryTodoRepository } from '@/src/todo/infrastructure/InMemoryTodoRepository';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

export const container = new Container();

container
  .bind<TodoRepository>(SYMBOLS.TodoRepository)
  .to(InMemoryTodoRepository)
  .inSingletonScope();

container.bind<Create>(SYMBOLS.TodoCreate).to(Create).inSingletonScope();
container.bind<List>(SYMBOLS.TodoList).to(List).inSingletonScope();

export const { lazyInject } = getDecorators(container);
