import { SimpleGrid } from '@chakra-ui/react';

import { City } from '../components/City';
import { Main } from '../components/Main';

export default function americadoNorte() {
  return (
    <Main
      country={{ name: 'America do Norte', number: '4' }}
      languages="5"
      citys="7"
      description="A América do Norte está localizada no extremo norte das Américas e é
        composta por apenas quatro países: Estados Unidos, Canadá, Dinamarca e
        por ultimo o México. Os dois primeiros países são os únicos do
        continente americano que estão inseridos no grupo dos países mais
        importantes político e economicamente."
    >
      <SimpleGrid
        minChildWidth="230px"
        m={['0 auto', '0 8rem']}
        spacing="5"
        maxW="760px"
      >
        <City city="Nova York" country="Estados Unidos" />
        <City city="Cancun" country="México" />
        <City city="Toronto" country="Canadá" />
      </SimpleGrid>
    </Main>
  );
}
