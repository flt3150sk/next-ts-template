import useAspidaSWR from '@aspida/swr';
import { useCallback } from 'react';
import { useInput } from '../../../lib/hooks/useForm';
import { apiClient } from '../../../service/apiClient';

export const useEditTodo = (todoId: string) => {
  const { data, error } = useAspidaSWR(apiClient.todos._id(todoId as string));
  const {
    value: title,
    onChange: onChangeTitle,
    error: errorTitle,
    setError: setErrorTitle,
  } = useInput(data?.title);

  const {
    value: content,
    onChange: onChangeContent,
    error: errorContent,
    setError: setErrorContent,
  } = useInput(data?.content);

  const onSubmit = useCallback(() => {
    setErrorTitle('titleを入力してください');
    setErrorContent('contentを入力してください');
  }, [setErrorTitle, setErrorContent]);

  return {
    isLoading: !data,
    error,
    title,
    onChangeTitle,
    errorTitle,
    content,
    onChangeContent,
    errorContent,
    onSubmit,
  };
};
