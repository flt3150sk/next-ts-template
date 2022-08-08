import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { EditTodoScreen } from '../../../components/screens/EditTodoScreen/index.container';

const Page: NextPage = () => {
  const router = useRouter();
  const todoId = router.query.id;

  if (!todoId) return null;
  return <EditTodoScreen todoId={todoId as string} />;
};

export default Page;
