import Todo from '@/src/todo/domain/Todo';

export default interface TodoRepository {
  getAll(): Todo[];
  add(todo: Todo): Promise<void>;
}
