import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useInput } from '../../../lib/hooks/useForm';
import { createTodo } from './service';

export const useCreateTodo = () => {
  const router = useRouter();
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

  const titleValidator = useCallback((value: string) => {
    if (!value) return 'titleを入力してください';
    return null;
  }, []);

  const contentValidator = useCallback((value: string) => {
    if (!value) return 'contentを入力してください';
    return null;
  }, []);

  const onSubmit = async () => {
    const titleValidate = titleValidator(title);
    if (titleValidate) setErrorTitle(titleValidate);

    const contentValidate = contentValidator(content);
    if (contentValidate) setErrorContent(contentValidate);

    if (titleValidate || contentValidate) return;

    try {
      await createTodo(title, content);
      console.log('タスクを登録しました。');
      router.push('/');
    } catch (e) {
      console.error('タスクの登録に失敗しました。');
    }
  };

  return { title, onChangeTitle, errorTitle, content, onChangeContent, errorContent, onSubmit };
};
