import { Todo, TodoProps } from '../../feature/Todo';

export type Props = {
  todos: TodoProps[];
};

export const HomeScreenPresentaion: React.FC<Props> = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};
