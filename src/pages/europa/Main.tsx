import { Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import { City } from '../../components/City';
import { Info } from '../../components/Info';

export function Main() {
  return (
    <>
      <Flex p="8rem" pt="0" pb="0" justify="space-between">
        <Text
          maxW="500px"
          textAlign="justify"
          fontSize="xl"
          mr="20"
          fontWeight="normal"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex gap="14" direction="row" display="flex" align="center">
          <Flex direction="column" justify="center" align="center">
            <Text color="yellow.500" fontSize="4xl">
              50
            </Text>
            <Text fontSize="xl">países</Text>
          </Flex>

          <Flex direction="column" justify="center" align="center">
            <Text color="yellow.500" fontSize="4xl">
              60
            </Text>
            <Text fontSize="xl">línguas</Text>
          </Flex>

          <Flex direction="column" justify="center" align="center">
            <Text color="yellow.500" fontSize="4xl">
              27
            </Text>
            <Flex align="center" gap="2">
              <Text fontSize="xl">cidades +100</Text>
              <Info />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Text p="8rem" pt="0" pb="10" fontSize="3xl" mt="20">
        Cidades +100
      </Text>

      <SimpleGrid minChildWidth="246px" p="8rem" pl="7.5rem" pt="0" gap="5">
        <City city="Londres" country="Reino Unido" />

        <City city="Paris" country="França" />

        <City city="Roma" country="Itália" />

        <City city="Praga" country="República Tcheca" />

        <City city="Amsterdã" country="Holanda" />
      </SimpleGrid>
    </>
  );
}
