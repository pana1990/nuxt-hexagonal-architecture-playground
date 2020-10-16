<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">nuxt-hexagonal-architecture-playground</h1>
      <h2>store: {{ moduleStore }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';
import Logo from '@mamby/ui/components/Logo.vue';
import { ModuleStore } from '@mamby/src/module/domain/module-store';
import { inject } from 'inversify-props';
import TYPES from '@mamby/src/_shared/infrastructure/inversify/types';

@Component({
  components: { Logo },
})
export default class Index extends Vue {
  @inject(TYPES.MODULE_STORE) private readonly moduleStore!: ModuleStore;

  mounted() {
    setTimeout(() => this.moduleStore.setProp3('holi'), 3000);
  }
}
</script>

<style></style>
