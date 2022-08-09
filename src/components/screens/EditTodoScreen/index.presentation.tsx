import { TodoForm } from '../../feature/TodoForm';
import { useEditTodo, UseEditTodoArgs } from './hooks';

export type EditTodoScreenPresentaionProps = UseEditTodoArgs;

export const EditTodoScreenPresentaion: React.FC<EditTodoScreenPresentaionProps> = (props) => {
  const hooks = useEditTodo(props);

  return (
    <div>
      <TodoForm formTitle="編集" {...hooks} />
    </div>
  );
};
