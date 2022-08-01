import React from 'react';
import { BiSend } from 'react-icons/bi';
import { BsCreditCard2Front } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';

import { MyLink } from './myLink';

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
      <Flex gap={['2', '2rem']} flexDirection={['column', 'row']}>
        <Box float="left" textAlign="left">
          <Heading color="white">SyLu4N</Heading>
          <Text minW="160px" color="white">
            Frontend Developer
          </Text>
        </Box>
        <Flex
          textAlign="center"
          w="full"
          ml={['0', '-9.5rem']}
          justify="center"
          align="center"
        >
          <MyLink url="https://sylu4n.vercel.app/">
            <Icon as={BsCreditCard2Front} mr="0.5rem" />
            Portfolio
          </MyLink>

          <MyLink url="mailto:luaan.carlos@hotmail.com">
            <Icon as={BiSend} mr="0.5rem" />
            Contato
          </MyLink>

          <MyLink url="https://www.linkedin.com/in/luan-sim%C3%B5es-617492236/">
            <Icon as={FaLinkedinIn} mr="0.5rem" />
            LinkedIn
          </MyLink>
        </Flex>
      </Flex>
      <Text color="white">© Luan Simões. All right reserved</Text>
    </Box>
  );
}
