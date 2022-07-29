import Head from 'next/head';

import Header from './header';
import { Main } from './Main';

export default function Europa() {
  return (
    <>
      <Head>
        <title>WorldTrip | America</title>
      </Head>

      <Header />
      <Main />
    </>
  );
}
