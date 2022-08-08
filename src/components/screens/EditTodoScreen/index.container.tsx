import { useEditTodo } from './index.hooks';
import { EditTodoScreenPresentaion } from './index.presentation';

type Props = { todoId: string };

export const EditTodoScreen: React.FC<Props> = (props) => {
  const {
    isLoading,
    error,
    title,
    onChangeTitle,
    errorTitle,
    content,
    onChangeContent,
    errorContent,
    onSubmit,
  } = useEditTodo(props.todoId);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>Error!!</p>;
  return (
    <div>
      <EditTodoScreenPresentaion
        title={title}
        onChangeTitle={onChangeTitle}
        errorTitle={errorTitle}
        content={content}
        onChangeContent={onChangeContent}
        errorContent={errorContent}
        onSubmit={onSubmit}
      />
    </div>
  );
};
