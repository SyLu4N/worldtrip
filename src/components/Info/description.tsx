import { BsInfoCircle } from 'react-icons/bs';

import {
  Button,
  Flex,
  Icon,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';

export function Description() {
  return (
    <Flex w="15px" justify="center">
      <Popover>
        <PopoverTrigger>
          <Button
            bg="none"
            h="18px"
            w="15px"
            _hover={{ bg: 'none' }}
            _active={{ bg: 'none' }}
            p="0"
          >
            <Icon as={BsInfoCircle} _hover={{ color: 'black' }} />
          </Button>
        </PopoverTrigger>
        <PopoverContent position="absolute" right="0">
          <PopoverCloseButton />
          <PopoverBody>
            Quantas cidades entre as 100+ visitadas do mundo
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
