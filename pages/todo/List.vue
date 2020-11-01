<template>
  <ul class="list-disc">
    <li v-for="todo in todos" :key="todo">{{ todo }}</li>
  </ul>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';
import { todoStore } from '@/store';

@Component({})
export default class List extends Vue {
  get todos(): string[] {
    return todoStore.todos;
  }
}
</script>
