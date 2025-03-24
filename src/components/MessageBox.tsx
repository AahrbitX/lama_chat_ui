import { Box, useColorModeValue } from '@chakra-ui/react';
import Card from '@/components/card/Card';

export default function MessageBox(props: { output: string }) {
  const { output } = props;
  const textColor = useColorModeValue('navy.700', 'white');

  return (
    <Card
      display={output ? 'flex' : 'none'}
      px="22px !important"
      pl="22px !important"
      color={textColor}
      minH="450px"
      minW="full"
      fontSize={{ base: 'sm', md: 'md' }}
      lineHeight={{ base: '24px', md: '26px' }}
      fontWeight="500"
    >
      <Box whiteSpace="pre-wrap" overflowWrap="break-word">
        {output}
      </Box>
    </Card>
  );
}
