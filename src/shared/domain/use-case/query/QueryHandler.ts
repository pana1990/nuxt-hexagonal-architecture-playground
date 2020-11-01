import Query from '@/src/shared/domain/use-case/query/Query';

export default interface QueryHandler {
  ask(query?: Query): Response;
}
