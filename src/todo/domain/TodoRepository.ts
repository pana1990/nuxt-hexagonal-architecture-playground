import Todo from '@/src/todo/domain/Todo';
import TodoId from '@/src/todo/domain/TodoId';

export default interface TodoRepository {
  getAll(): Todo[];
  save(todo: Todo): void;
  find(todoId: TodoId): Todo | undefined;
}
