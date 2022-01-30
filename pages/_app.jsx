import { useStore } from '../store/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <title>Helium Book | See exciting images and lovely landscapes</title>
        <meta name="description" content="This book is a book that is used by the Helium team to learn so much about what is going on in helium" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://helium-book.vercel.app" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
