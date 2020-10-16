export abstract class UseCase<Param = void, Result = void> {
  abstract execute(params: Param): Result;
}
