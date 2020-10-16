export interface ModuleStore {
  getProp1(): string;
  getProp2(): { prop3: string };
  getProp3(): string;
  setProp1(value: string): void;
  setProp2(value: { prop3: string }): void;
  setProp3(value: string): void;
}
