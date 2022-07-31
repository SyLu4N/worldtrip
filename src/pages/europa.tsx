import { SimpleGrid } from '@chakra-ui/react';

import { City } from '../components/City';
import { Main } from '../components/Main';

export default function Europa() {
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
        <City city="Londres" country="Reino Unido" />
        <City city="Paris" country="França" />
        <City city="Roma" country="Itália" />
        <City city="Praga" country="República Tcheca" />
        <City city="Amsterdã" country="Holanda" />
      </SimpleGrid>
    </Main>
  );
}
