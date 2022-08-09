import { apiClient } from '../../../service/apiClient';

export const createTodo = async (title: string, content: string) => {
  return await apiClient.todos.$post({ body: { title, content } });
};
