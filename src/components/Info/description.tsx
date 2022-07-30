import { BsInfoCircle } from 'react-icons/bs';

import {
  Button,
  Icon,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';

export function Description() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg="none"
          mr="-2rem"
          h="18px"
          w="18px"
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          p="0"
        >
          <Icon as={BsInfoCircle} _hover={{ color: 'black' }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent w="260px">
        <PopoverCloseButton />
        <PopoverBody>
          Quantas cidades entre as 100+ visitadas do mundo
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
