/* eslint-disable unused-imports/no-unused-vars */
import { rest, ResponseResolver, RestContext, RestRequest } from 'msw';
import { Methods } from './commons';

type A1<T> = T extends (a1: infer I) => unknown ? I : never;

type Post = {
  post: (option: {
    body: Methods['post']['reqBody'];
    query: Methods['post']['query'];
    config?: any;
  }) => Promise<Methods['post']['resBody']>;
  $path: () => string;
};

/**
 * restPost 関数第一引数の期待値（型）
 */
export function restPost<T extends Post>(
  api: T,
  resolver: ResponseResolver<
    RestRequest<A1<T['post']>['body']>,
    RestContext,
    Awaited<ReturnType<T['post']>>['body']
  >
) {
  return rest.post(api.$path(), resolver);
}
