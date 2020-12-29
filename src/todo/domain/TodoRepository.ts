import Todo from '@/src/todo/domain/Todo';
import TodoId from '@/src/todo/domain/TodoId';

export default interface TodoRepository {
  getAll(): Promise<Todo[]>;
  save(todo: Todo): Promise<void>;
  find(todoId: TodoId): Promise<Todo>;
}
