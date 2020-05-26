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
import Vue from 'vue';
import Logo from '~/components/Logo.vue';

export default Vue.extend({
  components: {
    Logo
  }
});
</script>

<style></style>
