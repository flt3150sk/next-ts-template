import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useInput } from '../../../lib/hooks/useForm';
import { updateTodo } from './service';

export type UseEditTodoArgs = {
  todoId: string;
  title: string;
  content: string;
};

export const useEditTodo = (args: UseEditTodoArgs) => {
  const router = useRouter();
  const {
    value: title,
    onChange: onChangeTitle,
    error: errorTitle,
    setError: setErrorTitle,
  } = useInput(args.title);

  const {
    value: content,
    onChange: onChangeContent,
    error: errorContent,
    setError: setErrorContent,
  } = useInput(args.content);

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
      await updateTodo(args.todoId, title, content);
      console.log('タスクを登録しました。');
      router.push('/');
    } catch (e) {
      console.error('タスクの登録に失敗しました。');
    }
  };
  return {
    title,
    onChangeTitle,
    errorTitle,
    content,
    onChangeContent,
    errorContent,
    onSubmit,
  };
};
