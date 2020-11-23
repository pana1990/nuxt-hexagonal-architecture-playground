import { container } from '@/src/shared/infrastructure/container/Container';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { CreateHandler } from '@/src/todo/application/create/CreateHandler';
import CreateCommand from '@/src/todo/application/create/CreateCommand';
import { ListHandler } from '@/src/todo/application/list/ListHandler';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  name: 'TodoStore',
  stateFactory: true,
  namespaced: true,
})
export default class TodoStore extends VuexModule {
  _todos: string[] = [];

  @Mutation
  updateTodos() {
    const listResponse = container.get<ListHandler>(SYMBOLS.TODO_LIST).ask();
    this._todos = listResponse.todoList;
  }

  @Action({ rawError: true })
  addTodo(todo: string) {
    const createCommand = new CreateCommand(todo);
    container.get<CreateHandler>(SYMBOLS.TODO_CREATE).dispatch(createCommand);
    this.updateTodos();
  }

  get todos(): string[] {
    return this._todos;
  }
}
