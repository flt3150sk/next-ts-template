/* eslint-disable unused-imports/no-unused-vars */
import { rest, ResponseResolver, RestContext, RestRequest } from 'msw';
import { Methods } from './commons';

type A1<T> = T extends (a1: infer I) => unknown ? I : never;

type Delete = {
  delete: (option: {
    body: Methods['delete']['reqBody'];
    query: Methods['delete']['query'];
    config?: any;
  }) => Promise<Methods['delete']['resBody']>;
  $path: () => string;
};

/**
 * restdelete 関数第一引数の期待値（型）
 */
export function restdelete<T extends Delete>(
  api: T,
  resolver: ResponseResolver<
    RestRequest<A1<T['delete']>['body']>,
    RestContext,
    Awaited<ReturnType<T['delete']>>['body']
  >
) {
  return rest.delete(api.$path(), resolver);
}
