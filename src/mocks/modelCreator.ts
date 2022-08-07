import { Todo } from '../../api/@types';

export const modelCreator = {
  todo: (arg?: Partial<Todo>): Todo => {
    return {
      id: arg?.id ?? 'todoID',
      title: arg?.title ?? 'todoTitle',
      content: arg?.content ?? 'todoContent',
      isDone: arg?.isDone ?? false,
    };
  },
};
