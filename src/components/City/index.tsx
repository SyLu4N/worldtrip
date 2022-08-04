import {
  Box,
  Flex,
  Heading,
  Img,
  Text,
  Tooltip,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import { clearText } from '../../utils/clearText';
import { Modal } from './modal';

interface CityProps {
  city: string;
  country: string;
  description: string;
}

export function City({ city, country, description }: CityProps) {
  const urlCity = clearText(city);
  const urlCountry = clearText(country);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        h="auto"
        w="245px"
        p="0"
        m="auto"
        textAlign="left"
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        _active={{ bg: 'transparent' }}
      >
        <Tooltip
          label="Mais detalhes"
          bg="yellow.500"
          placement="bottom"
          visibility={['hidden', 'visible']}
        >
          <Flex
            cursor="pointer"
            justify={['center', 'left']}
            w="255px"
            _hover={{
              border: '1px solid yellow',
              borderRadius: '7px',
              borderColor: 'yellow.500',
            }}
          >
            <Box>
              <Img
                src={`assets/citys/city/${urlCity}.png`}
                alt=""
                w="full"
                borderRadius="6px 6px 0px 0px"
              />
              <Flex
                align="center"
                justify="space-between"
                p="6"
                border="1px"
                borderColor="rgba(255, 186, 8, 0.5)"
                borderTop="none"
                borderRadius="0px 0px 6px 6px"
                transitionDuration="600ms"
              >
                <Box>
                  <Heading fontSize="xl">{city}</Heading>
                  <Text
                    fontSize="sm"
                    mt="2"
                    color="gray.500"
                    fontWeight="normal"
                  >
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
            </Box>
          </Flex>
        </Tooltip>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        city={city}
        country={country}
        description={description}
      />
    </>
  );
}
