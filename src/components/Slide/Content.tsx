import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { clearText } from '../../utils/clearText';

interface ContentProps {
  continent: string;
  text: string;
}

export function Content({ continent, text }: ContentProps) {
  const newContinent = clearText(continent);

  return (
    <Box position="relative">
      <Link href={newContinent}>
        <a>
          <img src={`assets/slides/${newContinent}.png`} alt="" />
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
        </a>
      </Link>
    </Box>
  );
}
