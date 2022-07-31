import React from 'react';
import { BiSend } from 'react-icons/bi';
import { BsCreditCard2Front } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

import { Box, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box
      bg="yellow.500"
      p="1.3rem 12%"
      textAlign="center"
      position="absolute"
      left="0"
      right="0"
      mt="10rem"
    >
      <Flex gap="2rem">
        <Box float="left" textAlign="left">
          <Heading color="white">SyLu4N</Heading>
          <Text minW="160px" color="white">
            Frontend Developer
          </Text>
        </Box>
        <Flex textAlign="center" w="full" ml="-9.5rem" justify="center">
          <Link
            href="https://sylu4n.vercel.app/"
            target="_blank"
            rel="noreferrer"
            display="inline-flex"
            alignItems="center"
            h="1.2rem"
            mr="1.5rem"
            fontSize="1.2rem"
            color="white"
          >
            <Icon as={BsCreditCard2Front} mr="0.5rem" />
            Portfolio
          </Link>
          <Link
            href="mailto:luaan.carlos@hotmail.com"
            target="_blank"
            rel="noreferrer"
            display="inline-flex"
            alignItems="center"
            h="1.2rem"
            mr="1.5rem"
            fontSize="1.2rem"
            color="white"
          >
            <Icon as={BiSend} mr="0.5rem" />
            Contato
          </Link>
          <Link
            href="https://www.linkedin.com/in/luan-sim%C3%B5es-617492236/"
            target="_blank"
            rel="noreferrer"
            display="inline-flex"
            alignItems="center"
            h="1.2rem"
            mr="1.5rem"
            fontSize="1.2rem"
            color="white"
          >
            <Icon as={FaLinkedinIn} mr="0.5rem" />
            LinkedIn
          </Link>
        </Flex>
      </Flex>
      <Text color="white">© Luan Simões. All right reserved</Text>
    </Box>
  );
}
