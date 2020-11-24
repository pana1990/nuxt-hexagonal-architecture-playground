<template>
  <ul class="list-disc">
    <li
      v-for="todo in todos"
      :key="todo.id"
      :class="{ completed: todo.isDone, pointer: !todo.isDone }"
    >
      <a @click="completeTodo(todo.id)">
        <b>{{ todo.body }}</b>
        <small>{{ todo.createdAt | formatDate }}</small>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';
import { todoStore } from '@/store';

@Component({})
export default class List extends Vue {
  get todos(): ListResponse[] {
    return todoStore.todos.data;
  }

  completeTodo(todoId: string) {
    todoStore.completeTodo(todoId);
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
.pointer {
  cursor: pointer;
}
</style>
