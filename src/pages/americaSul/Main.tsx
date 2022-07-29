import { Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import { City } from '../../components/City';

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
          A América do Sul é um continente que compreende a porção meridional da
          América. Também é considerada um subcontinente do continente
          americano. O Brasil representa atualmente a metade da população e
          produto econômico desta região
        </Text>

        <Stack spacing="14" direction="row">
          <Flex direction="column" justify="center" align="center">
            <Text color="yellow.500" fontSize="4xl">
              12
            </Text>
            <Text fontSize="xl">países</Text>
          </Flex>

          <Flex direction="column" justify="center" align="center">
            <Text color="yellow.500" fontSize="4xl">
              9
            </Text>
            <Text fontSize="xl">línguas</Text>
          </Flex>

          <Flex direction="column" justify="center" align="center">
            <Text color="yellow.500" fontSize="4xl">
              2
            </Text>
            <Text fontSize="xl">cidades +100</Text>
          </Flex>
        </Stack>
      </Flex>

      <Text p="8rem" pt="0" pb="10" fontSize="3xl" mt="20">
        Cidades +100
      </Text>

      <SimpleGrid
        minChildWidth="246px"
        maxW="800px"
        p="8rem"
        pl="7.5rem"
        pt="0"
        gap="5"
      >
        <City city="Lima" country="Peru" />
        <City city="Rio de Janeiro" country="Brasil" />
      </SimpleGrid>
    </>
  );
}
