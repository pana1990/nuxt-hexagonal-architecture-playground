import { Plugin } from "@nuxt/types";
import bindContext from "@mamby/src/_shared/infrastructure/inversify/container";

const bindContextToContainer: Plugin = (ctx) => {
  bindContext(ctx);
};

export default bindContextToContainer;
