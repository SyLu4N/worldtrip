import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { theme } from '../styles/theme';
import '../styles/slide.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
