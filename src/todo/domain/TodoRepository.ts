export default interface TodoRepository {
  getAll(): string[];
  add(task: string): Promise<void>;
}
