import { TodoForm } from '../../feature/TodoForm';
import { useCreateTodo } from './hooks';

export type CreateTodoScreenPresentaionProps = {};

export const CreateTodoScreenPresentaion: React.FC<CreateTodoScreenPresentaionProps> = () => {
  const hooks = useCreateTodo();

  return (
    <div>
      <TodoForm formTitle="新規作成" {...hooks} />
    </div>
  );
};
