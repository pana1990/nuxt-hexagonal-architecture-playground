import Command from '@/src/shared/domain/use-case/command/Command';

export default interface CommandHandler {
  dispatch(command: Command): void;
}
