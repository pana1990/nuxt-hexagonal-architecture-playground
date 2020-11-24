export default class TodoId {
  constructor(readonly value: string) {}

  equals(todoId: TodoId): boolean {
    return todoId.value === this.value;
  }
}
