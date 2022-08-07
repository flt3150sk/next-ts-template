/* eslint-disable unused-imports/no-unused-vars */
/**
 * Aspida で生成される Methods型を模倣したもの。型をキャプチャするために用意
 */
export type Method = {
  reqHeaders: any;
  query: any;
  status: number;
  resBody: any;
  reqBody: any;
};
export type MethodNames = 'get' | 'post' | 'put' | 'patch' | 'delete';
export type Methods = { [K in MethodNames]: Method };
