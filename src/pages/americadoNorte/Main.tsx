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
          A América do Norte está localizada no extremo norte das Américas e é
          composta por apenas quatro países: Estados Unidos, Canadá, Dinamarca e
          por ultimo o México. Os dois primeiros países são os únicos do
          continente americano que estão inseridos no grupo dos países mais
          importantes político e economicamente.
        </Text>

        <Flex gap="14" direction="row" display="flex" align="center">
          <Info country="4" languages="5" citys="7" />
        </Flex>
      </Flex>

      <Text p="8rem" pt="0" pb="10" fontSize="3xl" mt="20">
        Cidades +100
      </Text>

      <SimpleGrid
        minChildWidth="246px"
        maxW="80%"
        p="8rem"
        ml="-0.5rem"
        pt="0"
        gap="5"
      >
        <City city="Nova York" country="Estados Unidos" />
        <City city="Cancun" country="México" />
        <City city="Toronto" country="Canadá" />
      </SimpleGrid>
    </>
  );
}
