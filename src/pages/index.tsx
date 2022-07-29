import { Box, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { SwiperProps, SwiperSlide } from 'swiper/react';

import { NavBar } from '../components/NavBar';
import { Slide } from '../components/Slide';

export default function Home() {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

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
          <Slide settings={settings}>
            <SwiperSlide>
              <Box position="relative">
                <Link href="europa">
                  <a>
                    <img src="assets/slides/europa.png" alt="" />
                    <Flex
                      align="center"
                      direction="column"
                      color="white"
                      position="absolute"
                      top="40%"
                      left="40%"
                      right="40%"
                    >
                      <Heading>Europa</Heading>
                      <Text mt="4">O continente mais antigo.</Text>
                    </Flex>
                  </a>
                </Link>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box position="relative">
                <Link href="americaSul">
                  <a>
                    <img src="assets/slides/americaSul.png" alt="" />
                    <Flex
                      align="center"
                      direction="column"
                      color="white"
                      position="absolute"
                      top="40%"
                      left="30%"
                      right="30%"
                    >
                      <Heading>America do Sul</Heading>
                      <Text mt="4">O subcontinente Tropical.</Text>
                    </Flex>
                  </a>
                </Link>
              </Box>
            </SwiperSlide>
          </Slide>
        </Box>
      </main>
    </>
  );
}
