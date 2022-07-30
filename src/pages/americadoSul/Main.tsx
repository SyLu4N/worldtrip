import { Flex, SimpleGrid, Text } from '@chakra-ui/react';

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
          A América do Sul é um continente que compreende a porção meridional da
          América. Também é considerada um subcontinente do continente
          americano. O Brasil representa atualmente a metade da população e
          produto econômico desta região
        </Text>

        <Flex gap="14" direction="row" display="flex" align="center">
          <Info country="12" languages="9" citys="2" />
        </Flex>
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
