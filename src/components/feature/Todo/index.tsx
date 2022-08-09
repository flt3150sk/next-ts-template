import Link from 'next/link';
import { memo } from 'react';
import { Todo as TodoType } from '../../../api/@types';

export type TodoProps = {
  id: TodoType['id'];
  title: TodoType['title'];
  content: TodoType['content'];
  status: string;
};

export const Todo: React.FC<TodoProps> = memo((props) => {
  return (
    <div>
      <p>ID: {props.id}</p>
      <Link key={props.id} href={`/todos/${props.id}/edit`} passHref>
        <a>
          <p>タイトル: {props.title}</p>
        </a>
      </Link>
      <p>内容: {props.content}</p>
      <p>ステータス: {props.status}</p>
    </div>
  );
});

Todo.displayName = 'Todo';
