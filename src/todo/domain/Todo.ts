import TodoId from '@/src/todo/domain/TodoId';
import TodoBody from '@/src/todo/domain/TodoBody';
import TodoCreatedAt from '@/src/todo/domain/TodoCreatedAt';

export default class Todo {
  constructor(
    private readonly _id: TodoId,
    private readonly _body: TodoBody,
    private readonly _createdAt: TodoCreatedAt
  ) {}

  get body(): TodoBody {
    return this._body;
  }

  get createdAt(): TodoCreatedAt {
    return this._createdAt;
  }

  static create(todoId: TodoId, todoBody: TodoBody) {
    return new Todo(todoId, todoBody, Date.now());
  }
}
