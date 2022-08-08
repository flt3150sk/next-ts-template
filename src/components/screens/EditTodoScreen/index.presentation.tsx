import { TodoForm, TodoFormProps } from '../../feature/TodoForm';

export type EditTodoScreenPresentaionProps = Omit<TodoFormProps, 'formTitle'>;

export const EditTodoScreenPresentaion: React.FC<EditTodoScreenPresentaionProps> = (props) => {
  return (
    <div>
      <TodoForm formTitle="編集" {...props} />
    </div>
  );
};
