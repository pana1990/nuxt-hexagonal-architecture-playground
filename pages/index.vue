<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-hexagonal-architecture-playground
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';
import Logo from '~/components/Logo.vue';

@Component({
  components: { Logo }
})
export default class Index extends Vue {}
</script>

<style></style>
