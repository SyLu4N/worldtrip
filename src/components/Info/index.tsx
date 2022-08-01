import { Flex, Text } from '@chakra-ui/react';

import { Description } from './description';

interface InfoProps {
  country: string;
  languages: string;
  citys: string;
}

export function Info({ country, languages, citys }: InfoProps) {
  return (
    <Flex gap="14" direction="row" display="flex" align="center">
      <Flex direction="column" justify="center" align="center">
        <Text color="yellow.500" fontSize={['3xl', '4xl']}>
          {country}
        </Text>
        <Text fontSize={['md', 'xl']}>países</Text>
      </Flex>

      <Flex direction="column" justify="center" align="center">
        <Text color="yellow.500" fontSize={['3xl', '4xl']}>
          {languages}
        </Text>
        <Text fontSize={['md', 'xl']}>línguas</Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align="center"
        position="relative"
      >
        <Text color="yellow.500" fontSize={['3xl', '4xl']}>
          {citys}
        </Text>
        <Flex align="center" gap="2">
          <Text fontSize={['md', 'xl']} w={['110px', '135px']}>
            cidades +100
          </Text>
          <Flex overflow="x">
            <Description />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
