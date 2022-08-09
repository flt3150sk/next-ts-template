import { apiClient } from '../../../service/apiClient';

export const updateTodo = async (todoId: string, title: string, content: string) => {
  return await apiClient.todos
    ._id(todoId)
    .$put({ body: { id: todoId, title, content, isDone: false } });
};
