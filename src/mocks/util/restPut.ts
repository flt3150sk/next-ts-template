/* eslint-disable unused-imports/no-unused-vars */
import { rest, ResponseResolver, RestContext, RestRequest } from 'msw';
import { Methods } from './commons';

type A1<T> = T extends (a1: infer I) => unknown ? I : never;

type Put = {
  put: (option: {
    body: Methods['put']['reqBody'];
    query: Methods['put']['query'];
    config?: any;
  }) => Promise<Methods['put']['resBody']>;
  $path: () => string;
};

/**
 * restput 関数第一引数の期待値（型）
 */
export function restPut<T extends Put>(
  api: T,
  resolver: ResponseResolver<
    RestRequest<A1<T['put']>['body']>,
    RestContext,
    Awaited<ReturnType<T['put']>>['body']
  >
) {
  return rest.put(api.$path(), resolver);
}
