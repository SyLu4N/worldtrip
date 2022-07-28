import { Flex, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface NavBarProps {
  src: string;
  alt: string;
  msg: string;
}

export function NavBar({ src, alt, msg }: NavBarProps) {
  const url = msg.replace(' ', '');

  return (
    <Link href={url}>
      <Flex
        cursor="pointer"
        justify="center"
        direction="column"
        align="center"
        as="a"
        maxW="150px"
        m="auto"
        fontWeight="600"
        color="gray.600"
        _hover={{ color: 'gray.500' }}
        transitionDuration="200ms"
      >
        <Img src={src} alt={alt} w="70px" />
        <Text fontSize="xl" mt="5">
          {msg}
        </Text>
      </Flex>
    </Link>
  );
}
