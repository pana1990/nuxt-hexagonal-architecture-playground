import Command from '@/src/shared/domain/use-case/command/Command';

export default class CreateCommand implements Command {
  constructor(readonly todoBody: string) {}
}
