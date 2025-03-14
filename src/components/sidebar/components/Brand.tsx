'use client';
// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
  return (
    <Flex alignItems="center" flexDirection="column">
      <Text fontSize="3xl" fontWeight="semibold">
        AahbitX&deg;
      </Text>
      <HSeparator mt="20px" />
    </Flex>
  );
}

export default SidebarBrand;
