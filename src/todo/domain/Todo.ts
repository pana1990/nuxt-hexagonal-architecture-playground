import TodoId from '@/src/todo/domain/TodoId';
import TodoBody from '@/src/todo/domain/TodoBody';
import TodoCreatedAt from '@/src/todo/domain/TodoCreatedAt';

export default class Todo {
  constructor(
    private readonly _id: TodoId,
    private readonly _body: TodoBody,
    private readonly _createdAt: TodoCreatedAt,
    private _done: boolean
  ) {}

  get id(): TodoId {
    return this._id;
  }

  get body(): TodoBody {
    return this._body;
  }

  get isDone(): boolean {
    return this._done;
  }

  get createdAt(): TodoCreatedAt {
    return this._createdAt;
  }

  static create(todoId: TodoId, todoBody: TodoBody) {
    return new Todo(todoId, todoBody, new TodoCreatedAt(new Date()), false);
  }

  done() {
    this._done = true;
  }
}
