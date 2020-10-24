<template>
  <form class="w-full max-w-sm">
    <div class="flex items-center border-b border-teal-500 py-2">
      <input
        v-model="todo.task"
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="task"
        aria-label="taks"
      />
      <button
        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
        @click="addTask"
      >
        Crear
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { Create as TodoCreate } from '@/src/todo/application/Create';
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';
import { Todo } from '@/store/TodoStore';
import { lazyInject } from '@/src/shared/infrastructure/container/Container';

@Component({
  components: {},
})
export default class Create extends Vue {
  todo: Todo = {
    task: '',
  };

  @lazyInject(SYMBOLS.TodoCreate)
  private todoCreate!: TodoCreate;

  public addTask(): void {
    this.todoCreate.execute(this.todo.task);
    this.todo.task = '';
  }
}
</script>
