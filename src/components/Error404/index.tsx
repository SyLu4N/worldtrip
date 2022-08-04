import { Heading } from '@chakra-ui/react';
import Head from 'next/head';

export function Error404() {
  return (
    <>
      <Head>
        <title>Worldtrip | 404</title>
      </Head>
      <Heading h="100vh" w="100vw" textAlign="center" mt="20">
        A rota que você procura não existe
      </Heading>
    </>
  );
}
