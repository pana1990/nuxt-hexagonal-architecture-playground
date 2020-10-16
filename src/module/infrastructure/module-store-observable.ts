import { ModuleState } from "@mamby/src/module/domain/module-state";
import { injectable } from "inversify-props";
import { ModuleStore } from "@mamby/src/module/domain/module-store";
import { Store } from "@mamby/src/_shared/infrastructure/store/store";

@injectable()
export class ModuleStoreObservable extends Store<ModuleState> implements ModuleStore {
  constructor() {
    super({
      prop1: "prop1 value",
      prop2: {
        prop3: "prop3 value"
      }
    });
  }

  getProp1() {
    return this.state.prop1;
  }

  getProp2() {
    return this.state.prop2;
  }

  getProp3() {
    return this.state.prop2.prop3;
  }

  setProp1(value: string) {
    this.state.prop1 = value;
  }

  setProp2(value: { prop3: string }) {
    this.state.prop2 = value;
  }

  setProp3(value: string) {
    this.state.prop2.prop3 = value;
  }
}
