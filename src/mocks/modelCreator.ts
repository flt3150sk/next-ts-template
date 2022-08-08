import { Todo } from '../api/@types';

export const modelCreator = {
  todo: (arg?: Partial<Todo>): Todo => {
    return {
      id: arg?.id ?? 'todo Id',
      title: arg?.title ?? 'todo title',
      content: arg?.content ?? 'todo content',
      isDone: arg?.isDone ?? false,
    };
  },
};
