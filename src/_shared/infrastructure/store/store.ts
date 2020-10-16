import Vue from "vue";

export abstract class Store<State extends object> {
  protected state: State;

  protected constructor(state: State) {
    this.state = Vue.observable(state);
  }
}
