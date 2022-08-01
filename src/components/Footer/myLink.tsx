import { ReactNode } from 'react';

import { Link } from '@chakra-ui/react';

interface MyLinkProps {
  url: string;
  children: ReactNode;
}

export function MyLink({ url, children }: MyLinkProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      display="flex"
      alignItems="center"
      h="1.2rem"
      mr={['2', '1.5rem']}
      fontSize="1.2rem"
      color="white"
      mb="2rem"
    >
      {children}
    </Link>
  );
}
