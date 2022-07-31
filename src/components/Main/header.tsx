import { Box, Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { clearText } from '../../utils/clearText';

interface HeaderProps {
  country: string;
}

export default function Header({ country }: HeaderProps) {
  const newCountry = clearText(country);

  return (
    <>
      <Head>
        <title>WorldTrip | {country}</title>
      </Head>

      <Box
        mb="3%"
        h="550px"
        bgImg={`url("assets/${newCountry}.png")`}
        bgSize="cover"
        bgPos="center"
      >
        <Heading
          color="white"
          pt={['30rem', '24rem']}
          ml="9.5%"
          fontSize={['4xl', '5xl']}
        >
          {country}
        </Heading>
      </Box>
    </>
  );
}
