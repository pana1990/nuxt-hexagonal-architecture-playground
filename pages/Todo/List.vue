<template>
  <ul class="list-disc">
    <li v-for="todo in todos" :key="todo">{{ todo }}</li>
  </ul>
</template>

<script lang="ts">
import { lazyInject } from '@/src/shared/infrastructure/container/Container';
import { List as TodoList } from '@/src/todo/application/List';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';

@Component({})
export default class List extends Vue {
  @lazyInject(SYMBOLS.TodoList)
  private todoList!: TodoList;

  get todos(): string[] {
    return this.todoList.execute();
  }
}
</script>
