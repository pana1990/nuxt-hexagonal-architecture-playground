export interface TodoRepository {
  getAll(): string[];
  add(task: string): Promise<void>;
}
