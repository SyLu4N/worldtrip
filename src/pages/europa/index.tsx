import Head from 'next/head';

import Header from './header';
import { Main } from './Main';

export default function Europa() {
  return (
    <>
      <Head>
        <title>WorldTrip | Europa</title>
      </Head>

      <Header />
      <Main />
    </>
  );
}
