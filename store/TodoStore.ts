import { container } from '@/src/shared/infrastructure/container/Container';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { CompleteCommand } from '@/src/todo/application/complete/CompleteCommand';
import { CompleteHandler } from '@/src/todo/application/complete/CompleteHandler';
import { CreateHandler } from '@/src/todo/application/create/CreateHandler';
import CreateCommand from '@/src/todo/application/create/CreateCommand';
import { ListResponseCollection } from '@/src/todo/application/list/ListResponseCollection';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ListHandler } from '@/src/todo/application/list/ListHandler';

@Module({
  name: 'TodoStore',
  stateFactory: true,
  namespaced: true,
})
export default class TodoStore extends VuexModule {
  _todos: ListResponseCollection = new ListResponseCollection([]);

  @Mutation
  setTodos(todos: ListResponseCollection) {
    this._todos = todos;
  }

  @Action
  loadTodos() {
    container.get<ListHandler>(SYMBOLS.TODO_LIST).ask().then(this.setTodos);
  }

  @Action
  addTodo(todo: string) {
    const createCommand = new CreateCommand(todo);
    container.get<CreateHandler>(SYMBOLS.TODO_CREATE).dispatch(createCommand);
    this.loadTodos();
  }

  @Action
  completeTodo(todoId: string) {
    const completeTodoCommand = new CompleteCommand(todoId);
    container
      .get<CompleteHandler>(SYMBOLS.TODO_COMPLETE_TODO)
      .dispatch(completeTodoCommand);
    this.loadTodos();
  }

  get todos(): ListResponseCollection {
    return this._todos;
  }
}
