import {
  Box,
  Flex,
  Heading,
  Img,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal as ModalChakra,
  Text,
} from '@chakra-ui/react';

import { clearText } from '../../utils/clearText';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: string;
  country: string;
  description: string;
}

export function Modal({
  isOpen,
  onClose,
  description,
  city,
  country,
}: ModalProps) {
  const urlCity = clearText(city);
  const urlCountry = clearText(country);

  return (
    <ModalChakra isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <ModalHeader p="0">
          <Img
            src={`assets/citys/city/${urlCity}.png`}
            alt=""
            w="full"
            borderRadius="6px 6px 0px 0px"
          />
        </ModalHeader>
        <ModalCloseButton
          color="white"
          bg="red.500"
          fontWeight="bold"
          transition="all 300ms"
          _hover={{ bg: 'red' }}
        />
        <ModalBody textAlign="justify">{description}</ModalBody>

        <ModalFooter>
          <Flex align="center" justify="space-between" p="6" w="full">
            <Box>
              <Heading fontSize="xl">{city}</Heading>
              <Text fontSize="sm" mt="2" color="gray.500" fontWeight="normal">
                {country}
              </Text>
            </Box>
            <Img
              src={`assets/citys/country/${urlCountry}.png`}
              w="8"
              h="8"
              boxShadow="2px 2px 6px 1px rgba(0, 0, 0, 0.2)"
              borderRadius="full"
            />
          </Flex>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
}
