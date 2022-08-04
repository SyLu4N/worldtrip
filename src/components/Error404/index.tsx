import { IoIosArrowRoundBack } from 'react-icons/io';

import { Flex, Heading, Icon, Img } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export function Error404() {
  return (
    <>
      <Head>
        <title>Worldtrip | 404</title>
      </Head>

      <Img src="/assets/404.png" maxH="500px" m="auto" />
      <Heading mt={['-3rem', '-5rem']} textAlign="center">
        A rota que você procura não existe
      </Heading>
      <Link href="/">
        <Flex
          as="a"
          m="auto"
          mt="6"
          alignItems="center"
          w="max-content"
          cursor="pointer"
          _hover={{ color: 'black' }}
        >
          <Icon w="9" h="9" as={IoIosArrowRoundBack} />
          Voltar
        </Flex>
      </Link>
    </>
  );
}
