import Query from '@/src/shared/domain/use-case/query/Query';
import Response from '@/src/shared/domain/use-case/query/Response';

export default interface QueryHandler {
  ask(query?: Query): Response;
}
