import { Flex, Img, Text } from '@chakra-ui/react';

interface NavBarProps {
  src: string;
  alt: string;
  msg: string;
}

export function NavBar({ src, alt, msg }: NavBarProps) {
  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      as="a"
      maxW="150px"
      m="auto"
      fontWeight="600"
      color="gray.600"
    >
      <Img src={src} alt={alt} w="70px" />
      <Text fontSize="xl" mt="5" w="150px" textAlign="center">
        {msg}
      </Text>
    </Flex>
  );
}
