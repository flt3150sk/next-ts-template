import '../styles/globals.css';
import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  const MockServer = () => import('../src/mocks/worker');
  MockServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
