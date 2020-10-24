import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

export interface Todo {
  task: string;
}

@Module({
  name: 'TodoStore',
  stateFactory: true,
  namespaced: true,
})
export default class TodoStore extends VuexModule {
  _todos: string[] = [];

  @Mutation
  addTodo(todo: string) {
    this._todos.push(todo);
  }

  get todos(): string[] {
    return this._todos;
  }
}
