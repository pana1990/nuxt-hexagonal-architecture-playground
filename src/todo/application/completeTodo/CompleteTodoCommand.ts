import Command from '@/src/shared/domain/use-case/command/Command';
import { injectable } from 'inversify';

@injectable()
export class CompleteTodoCommand implements Command {
  constructor(readonly todoId: string) {}
}
