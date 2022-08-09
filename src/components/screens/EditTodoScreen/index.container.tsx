import useAspidaSWR from '@aspida/swr';
import { apiClient } from '../../../service/apiClient';
import { EditTodoScreenPresentaion } from './index.presentation';

type Props = { todoId: string };

export const EditTodoScreen: React.FC<Props> = (props) => {
  const { data, error } = useAspidaSWR(apiClient.todos._id(props.todoId as string));

  if (!data) return <p>loading...</p>;
  if (error) return <p>Error!!</p>;
  return <EditTodoScreenPresentaion todoId={data.id} title={data.title} content={data.content} />;
};
