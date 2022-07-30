import { Box, Flex, Heading, Img, LinkBox, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { clearText } from '../../utils/clearText';

interface ContentProps {
  continent: string;
  text: string;
}

export function Content({ continent, text }: ContentProps) {
  const newContinent = clearText(continent);

  return (
    <Box position="relative" border="1px" w="100%">
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
