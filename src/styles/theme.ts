import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: { '500': '#FFBA08' },
    gray: { '500': '#999999', '600': '#47585B' },
  },
  fonts: {
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        position: 'relative',
        overflowX: 'hidden',
        color: 'gray.600',
        fontWeight: '600',
      },
    },
  },
});
