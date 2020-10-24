export default interface UseCase {
  execute(request: any): Promise<any>;
}
