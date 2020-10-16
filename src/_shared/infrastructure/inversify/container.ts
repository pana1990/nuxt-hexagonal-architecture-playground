import { Container, container } from 'inversify-props';
import TYPES from '@mamby/src/_shared/infrastructure/inversify/types';
import { Context } from '@nuxt/types';
import { ModuleStoreObservable } from '@mamby/src/module/infrastructure/module-store-observable';
import { ModuleStore } from '@mamby/src/module/domain/module-store';

let created: boolean = false;

export default function getContainer(ctx?: Context): Container {
  if (created || !ctx) {
    return container;
  }

  container
    .bind<ModuleStore>(TYPES.MODULE_STORE)
    .to(ModuleStoreObservable)
    .inSingletonScope();

  created = true;

  return container;
}
