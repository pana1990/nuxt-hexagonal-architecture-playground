import DomainError from '@/src/shared/domain/error/DomainError';

export class TodoNotFoundError extends DomainError {
  constructor(todoId: string) {
    super(`Todo with id ${todoId} was not found`);
  }
}
