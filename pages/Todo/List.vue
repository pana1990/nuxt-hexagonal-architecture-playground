<template>
  <ul class="list-disc">
    <li v-for="todo in todos" :key="todo">{{ todo }}</li>
  </ul>
</template>

<script lang="ts">
import { lazyInject } from '@/src/shared/infrastructure/container/Container';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { TodoRepository } from '@/src/todo/domain/TodoRepository';
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';

@Component({})
export default class List extends Vue {
  @lazyInject(SYMBOLS.TodoRepository)
  private todoRepository!: TodoRepository;

  get todos(): string[] {
    return this.todoRepository.getAll();
  }
}
</script>
