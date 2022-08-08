import Link from 'next/link';
import { useHome } from './index.hooks';
import { HomeScreenPresentaion } from './index.presentation';

type Props = {};

export const HomeScreen: React.FC<Props> = () => {
  const { data, error } = useHome();

  if (!data) return <p>loading...</p>;
  if (error) return <p>ERROR!!</p>;
  return (
    <div>
      <Link href={'/todos/new'}>新規作成</Link>
      <HomeScreenPresentaion todos={data} />
    </div>
  );
};
