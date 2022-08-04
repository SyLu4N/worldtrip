import { Box, Flex, Heading, LinkBox, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { clearText } from '../../utils/clearText';

interface ContentProps {
  continent: string;
  text: string;
}

export function Content({ continent, text }: ContentProps) {
  const newContinent = clearText(continent);
  console.log(newContinent);

  return (
    <Box position="relative" m={['0', '0 2rem']} w="100%" cursor="pointer">
      <Link href={newContinent}>
        <LinkBox
          h="450px"
          w="full"
          bgImg={`url('/assets/slides/${newContinent}.png')`}
          bgSize="cover"
        >
          <Flex
            align="center"
            direction="column"
            color="white"
            position="absolute"
            top="40%"
            left="0%"
            right="0%"
          >
            <Heading>{continent}</Heading>
            <Text mt="4">{text}</Text>
          </Flex>
        </LinkBox>
      </Link>
    </Box>
  );
}
