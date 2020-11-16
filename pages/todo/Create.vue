<template>
  <form class="w-full max-w-sm">
    <div class="flex items-center border-b border-teal-500 py-2">
      <input
        v-model="form.task"
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="task"
        aria-label="taks"
      />
      <button
        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
        tabindex="-1"
        @click="addTask"
      >
        Crear
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';
import { todoStore } from '@/store';

@Component({
  components: {},
})
export default class Create extends Vue {
  form = {
    task: '',
  };

  public addTask(): void {
    todoStore.addTodo(this.form.task);
    this.form.task = '';
  }
}
</script>
