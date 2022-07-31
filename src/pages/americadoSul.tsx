import { SimpleGrid } from '@chakra-ui/react';

import { City } from '../components/City';
import { Main } from '../components/Main';

export default function Europa() {
  return (
    <Main
      country={{ name: 'America do Sul', number: '12' }}
      languages="9"
      citys="2"
      description="A América do Sul é um continente que compreende a porção meridional da
        América. Também é considerada um subcontinente do continente
        americano. O Brasil representa atualmente a metade da população e
        produto econômico desta região"
    >
      <SimpleGrid
        minChildWidth="230px"
        m="0 8rem"
        pt="0"
        spacing="5"
        maxW="500px"
      >
        <City city="Lima" country="Peru" />
        <City city="Rio de Janeiro" country="Brasil" />
      </SimpleGrid>
    </Main>
  );
}
