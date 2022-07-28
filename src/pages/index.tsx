import { Box, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
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
            <Link href="europa">
              <a>
                <img src="assets/slide.png" alt="" />
                <Flex align="center" direction="column" mt="-21%" color="white">
                  <Heading>Europa</Heading>
                  <Text mt="4">O continente mais antigo.</Text>
                </Flex>
              </a>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <img src="assets/slide.png" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="assets/slide.png" alt="" />
          </SwiperSlide>
        </Slide>
      </Box>
    </main>
  );
}
