import { ReactNode } from 'react';

import { Flex, SimpleGrid, Text } from '@chakra-ui/react';

import { Info } from '../Info';
import Header from './header';

interface MainProps {
  country: {
    name: string;
    number: string;
  };
  citys: string;
  languages: string;
  description: string;
  children: ReactNode;
}

export function Main({
  country,
  description,
  languages,
  citys,
  children,
}: MainProps) {
  return (
    <>
      <Header country={country.name} />

      <SimpleGrid
        p={['0 1rem', '0 3rem', '0 5rem', '0 8rem']}
        minChildWidth="300px"
        spacing="6"
      >
        <Text
          maxW="500px"
          textAlign="justify"
          fontSize={['md', 'xl']}
          m="auto"
          fontWeight="normal"
        >
          {description}
        </Text>

        <Flex direction="row" display="flex" align="center" m="auto">
          <Info country={country.number} languages={languages} citys={citys} />
        </Flex>
      </SimpleGrid>

      <Text p={['0 1rem', '0 8rem']} pt="0" fontSize="3xl" mt="20" mb="2.5rem">
        Cidades +100
      </Text>

      {children}
    </>
  );
}
