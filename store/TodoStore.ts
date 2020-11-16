import { container } from '@/src/shared/infrastructure/container/Container';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { Create } from '@/src/todo/application/create/Create';
import CreateCommand from '@/src/todo/application/create/CreateCommand';
import { List } from '@/src/todo/application/list/List';
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
    const listResponse = container.get<List>(SYMBOLS.TODO_LIST).ask();
    this._todos = listResponse.todoList;
  }

  @Action
  async addTodo(todo: string) {
    const createCommand = new CreateCommand(todo);
    await container.get<Create>(SYMBOLS.TODO_CREATE).dispatch(createCommand);
    this.updateTodos();
  }

  get todos(): string[] {
    return this._todos;
  }
}
