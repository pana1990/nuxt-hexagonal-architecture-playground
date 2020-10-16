import { RouteConfig } from '@nuxt/types/config/router';
import FeaturePage from '@mamby/ui/pages/index.vue';

const routes: RouteConfig[] = [
  { path: '/', component: FeaturePage, name: 'feature' },
];

export default routes;
