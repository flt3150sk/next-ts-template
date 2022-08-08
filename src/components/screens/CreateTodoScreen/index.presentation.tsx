import { TodoForm, TodoFormProps } from '../../feature/TodoForm';

export type CreateTodoScreenPresentaionProps = Omit<TodoFormProps, 'formTitle'>;

export const CreateTodoScreenPresentaion: React.FC<CreateTodoScreenPresentaionProps> = (props) => {
  return (
    <div>
      <TodoForm formTitle="新規作成" {...props} />
    </div>
  );
};
