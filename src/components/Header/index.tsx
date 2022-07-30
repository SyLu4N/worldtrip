import { IoIosArrowBack } from 'react-icons/io';

import { Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex as="header" justify="center" w="full" p="3" position="relative">
      <Link href="/">
        <a>
          <img src="/assets/logo.png" alt="Logotipo" width={150} />
        </a>
      </Link>

      {asPath !== '/' && (
        <Link href="/">
          <a>
            <abbr title="Voltar">
              <Icon
                w="8"
                h="8"
                position="absolute"
                left="10%"
                top="25%"
                transitionDuration="300ms"
                color="gray.500"
                _hover={{ color: 'gray.600' }}
                as={IoIosArrowBack}
              />
            </abbr>
          </a>
        </Link>
      )}
    </Flex>
  );
}
