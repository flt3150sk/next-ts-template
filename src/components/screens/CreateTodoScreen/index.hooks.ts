import { useCallback } from 'react';
import { useInput } from '../../../lib/hooks/useForm';

export const useCreateTodo = () => {
  const {
    value: title,
    onChange: onChangeTitle,
    error: errorTitle,
    setError: setErrorTitle,
  } = useInput();
  const {
    value: content,
    onChange: onChangeContent,
    error: errorContent,
    setError: setErrorContent,
  } = useInput();

  const onSubmit = useCallback(() => {
    setErrorTitle('titleを入力してください');
    setErrorContent('contentを入力してください');
  }, [setErrorTitle, setErrorContent]);

  return { title, onChangeTitle, errorTitle, content, onChangeContent, errorContent, onSubmit };
};
