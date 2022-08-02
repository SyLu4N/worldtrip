import { SimpleGrid } from '@chakra-ui/react';

import { City } from '../components/City';
import { Main } from '../components/Main';
import { citys } from '../utils/citys';

export default function Europa() {
  const { europa } = citys;

  return (
    <Main
      country={{ name: 'Europa', number: '50' }}
      languages="60"
      citys="27"
      description="A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste."
    >
      <SimpleGrid
        minChildWidth="230px"
        m={['0 1rem', '0 8rem']}
        spacing="5"
        maxW="1030"
      >
        {europa.map((city) => (
          <>
            <City city={city.name} country={city.country} />
          </>
        ))}
      </SimpleGrid>
    </Main>
  );
}
