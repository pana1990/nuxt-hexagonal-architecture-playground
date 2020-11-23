export default class TodoId {
  constructor(private readonly _value: string) {}

  get value(): string {
    return this._value;
  }

  equals(todoId: TodoId): boolean {
    return todoId.value === this.value;
  }
}
