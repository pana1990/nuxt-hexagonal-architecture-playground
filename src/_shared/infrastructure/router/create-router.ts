import Vue from "vue";
import Router from "vue-router";
import routes from "@mamby/src/_shared/infrastructure/router/routes";

Vue.use(Router);

export function createRouter(): Router {
  return new Router({
    mode: "history",
    routes
  });
}

// TODO: register to Inversify container
