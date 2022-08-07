import { v4 } from 'uuid';
import { apiClient } from '../service/apiClient';
import { modelCreator } from './modelCreator';
import { restGet } from './util/restGet';
import { restPost } from './util/restPost';

export const handlers = [
  restGet(apiClient.todos, (req, res, ctx) => {
    const { todo } = modelCreator;

    return res(
      ctx.status(200),
      ctx.json([todo({ id: 'todo1' }), todo({ id: 'todo2', isDone: true }), todo({ id: 'todo3' })])
    );
  }),
  restPost(apiClient.todos, (req, res, ctx) => {
    const { title, content } = req.body;

    return res(ctx.status(200), ctx.json({ id: v4(), title, content, isDone: false }));
  }),
  restGet(apiClient.todos._id(':id'), (req, res, ctx) => {
    const id = req.params.id as string;
    const { todo } = modelCreator;

    return res(ctx.status(200), ctx.json(todo({ id })));
  }),
];
