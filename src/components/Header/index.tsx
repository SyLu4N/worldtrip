import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Flex as="header" justify="center" w="full" p="3">
      <Link href="/">
        <a>
          <img src="/assets/logo.png" alt="Logotipo" width={150} />
        </a>
      </Link>
    </Flex>
  );
}
