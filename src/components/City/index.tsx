import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';

interface CityProps {
  city: string;
  country: string;
}

export function City({ city, country }: CityProps) {
  function clearText(text: string) {
    const newText =
      text[0].toLowerCase() +
      text
        .substring(1)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s/g, '');

    return newText;
  }

  const urlCity = clearText(city);
  const urlCountry = clearText(country);

  return (
    <Box
      transitionDuration="250ms"
      m="auto"
      w="245px"
      h="275px"
      _hover={{ width: 'full' }}
    >
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
      >
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
    </Box>
  );
}
