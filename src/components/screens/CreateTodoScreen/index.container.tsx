import { useCreateTodo } from './index.hooks';
import { CreateTodoScreenPresentaion } from './index.presentation';

type Props = {};

export const CreateTodoScreen: React.FC<Props> = () => {
  const { title, onChangeTitle, errorTitle, content, onChangeContent, errorContent, onSubmit } =
    useCreateTodo();

  return (
    <div>
      <CreateTodoScreenPresentaion
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
