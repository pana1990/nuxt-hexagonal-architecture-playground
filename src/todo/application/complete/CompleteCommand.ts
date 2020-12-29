import Command from '@/src/shared/domain/use-case/command/Command';
import { injectable } from 'inversify';

@injectable()
export class CompleteCommand implements Command {
  constructor(readonly todoId: string) {}
}
