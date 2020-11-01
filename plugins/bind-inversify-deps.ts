import { container } from '@/src/shared/infrastructure/container/Container';
import { Container } from 'inversify';
import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $container: Container;
  }
}

Vue.prototype.$container = container;
