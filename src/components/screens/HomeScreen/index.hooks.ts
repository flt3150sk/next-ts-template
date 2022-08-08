import useAspidaSWR from '@aspida/swr';
import { apiClient } from '../../../service/apiClient';
import { statusUtil } from './../../../lib/util/statusUtil';
import { Props } from './index.presentation';

export const useHome = () => {
  const { data, error } = useAspidaSWR(apiClient.todos);

  if (!data) return { data, error };

  const shapeData: Props['todos'] = data.map((todo) => {
    return {
      id: todo.id,
      title: todo.title,
      content: todo.content,
      status: statusUtil(todo.isDone),
    };
  });

  return { data: shapeData, error };
};
