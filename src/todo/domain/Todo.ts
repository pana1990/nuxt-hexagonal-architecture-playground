import TodoId from '@/src/todo/domain/TodoId';
import TodoBody from '@/src/todo/domain/TodoBody';
import TodoCreatedAt from '@/src/todo/domain/TodoCreatedAt';

export default class Todo {
  private _done: boolean;

  constructor(
    private readonly _id: TodoId,
    private readonly _body: TodoBody,
    done: boolean,
    private readonly _createdAt: TodoCreatedAt
  ) {
    this._done = done;
  }

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
    return new Todo(todoId, todoBody, false, new TodoCreatedAt(new Date()));
  }

  done() {
    this._done = true;
  }
}
