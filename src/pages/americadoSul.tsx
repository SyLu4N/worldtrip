import { SimpleGrid } from '@chakra-ui/react';

import { City } from '../components/City';
import { Main } from '../components/Main';
import { citys } from '../utils/citys';

export default function Europa() {
  const { americadoSul } = citys;

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
        m={['0 1rem', '0 8rem']}
        spacing="5"
        maxW="1030"
      >
        {americadoSul.map((city) => (
          <>
            <City
              city={city.name}
              country={city.country}
              description={city.description}
            />
          </>
        ))}
      </SimpleGrid>
    </Main>
  );
}
