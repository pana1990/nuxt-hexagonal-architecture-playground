import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import TodoStore from '@/store/TodoStore';

// eslint-disable-next-line import/no-mutable-exports
let todoStore: TodoStore;

function initialiseStores(store: Store<any>): void {
  todoStore = getModule(TodoStore, store);
}

export { initialiseStores, todoStore };
