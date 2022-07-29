import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';

import { NavBar } from '../components/NavBar';
import { Slide } from '../components/Slide';

export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <main>
        <img src="/assets/banner.png" alt="Avião Amarelo" />
        <VStack spacing="16" mt="16">
          <SimpleGrid minChildWidth="150px" spacing="4" w="100%">
            <NavBar
              src="assets/cocktail.png"
              alt="drink na taça"
              msg="vida noturna"
            />
            <NavBar src="assets/surf.png" alt="Prancha de surf" msg="praia" />
            <NavBar
              src="assets/building.png"
              alt="Prancha de surf"
              msg="moderno"
            />
            <NavBar
              src="assets/museum.png"
              alt="Prancha de surf"
              msg="clássico"
            />
            <NavBar
              src="assets/earth.png"
              alt="Prancha de surf"
              msg="e mais..."
            />
          </SimpleGrid>

          <Flex w="full" justify="center">
            <Box bg="gray.600" w="80px" height="3px" />
          </Flex>
          <Text textAlign="center" fontSize="2xl">
            Vamos nessa?
            <br /> Então escolha seu continente
          </Text>
        </VStack>

        <Box mt="16" mb="16">
          <Slide />
        </Box>
      </main>
    </>
  );
}
