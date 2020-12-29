import { container } from '@/src/shared/infrastructure/container/Container';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { CompleteCommand } from '@/src/todo/application/complete/CompleteCommand';
import { CompleteHandler } from '@/src/todo/application/complete/CompleteHandler';
import { CreateHandler } from '@/src/todo/application/create/CreateHandler';
import CreateCommand from '@/src/todo/application/create/CreateCommand';
import { ListHandler } from '@/src/todo/application/list/ListHandler';
import { ListResponseCollection } from '@/src/todo/application/list/ListResponseCollection';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  name: 'TodoStore',
  stateFactory: true,
  namespaced: true,
})
export default class TodoStore extends VuexModule {
  _todos: ListResponseCollection = new ListResponseCollection([]);

  @Mutation
  updateTodos() {
    this._todos = container.get<ListHandler>(SYMBOLS.TODO_LIST).ask();
  }

  @Action
  addTodo(todo: string) {
    const createCommand = new CreateCommand(todo);
    container.get<CreateHandler>(SYMBOLS.TODO_CREATE).dispatch(createCommand);
    this.updateTodos();
  }

  @Action
  completeTodo(todoId: string) {
    const completeTodoCommand = new CompleteCommand(todoId);
    container
      .get<CompleteHandler>(SYMBOLS.TODO_COMPLETE_TODO)
      .dispatch(completeTodoCommand);
    this.updateTodos();
  }

  get todos(): ListResponseCollection {
    return this._todos;
  }
}
