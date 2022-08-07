import { v4 } from 'uuid';
import { apiClient } from '../service/apiClient';
import { modelCreator } from './modelCreator';
import { restdelete } from './util/restDelete';
import { restGet } from './util/restGet';
import { restPost } from './util/restPost';
import { restPut } from './util/restPut';

const { todo } = modelCreator;
export const handlers = [
  restGet(apiClient.todos, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([todo({ id: 'todo1' }), todo({ id: 'todo2', isDone: true }), todo({ id: 'todo3' })])
    );
  }),
  restPost(apiClient.todos, (req, res, ctx) => {
    const { title, content } = req.body;

    return res(ctx.status(200), ctx.json(todo({ id: v4(), title, content })));
  }),
  restGet(apiClient.todos._id(':id'), (req, res, ctx) => {
    const id = req.params.id as string;

    return res(ctx.status(200), ctx.json(todo({ id })));
  }),
  restPut(apiClient.todos._id(':id'), (req, res, ctx) => {
    return res(ctx.status(204));
  }),
  restdelete(apiClient.todos._id(':id'), (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
