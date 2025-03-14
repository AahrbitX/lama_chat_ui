'use client';

import { OpenAIModel } from '@/types/types';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdAutoAwesome, MdBolt } from 'react-icons/md';

function AiModeChange() {
  const [model, setModel] = useState<OpenAIModel>('gpt-4o');
  const [outputCode, setOutputCode] = useState<string>('');
  const buttonBg = useColorModeValue('white', 'whiteAlpha.100');
  const buttonShadow = useColorModeValue(
    '14px 27px 45px rgba(112, 144, 176, 0.2)',
    'none'
  );
  const textColor = useColorModeValue('navy.700', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgIcon = useColorModeValue(
    'linear-gradient(180deg, #FBFBFF 0%, #CACAFF 100%)',
    'whiteAlpha.200'
  );
  const gray = useColorModeValue('gray.500', 'white');

  return (
    <Flex direction={'column'} w="100%" mb={outputCode ? '20px' : 'auto'}>
      <Flex mx="auto" zIndex="2" w="max-content" mb="20px" borderRadius="60px">
        <Flex
          cursor={'pointer'}
          transition="0.3s"
          justify={'center'}
          align="center"
          bg={model === 'gpt-4o' ? buttonBg : 'transparent'}
          w="174px"
          h="70px"
          boxShadow={model === 'gpt-4o' ? buttonShadow : 'none'}
          borderRadius="14px"
          color={textColor}
          fontSize="18px"
          fontWeight={'700'}
          onClick={() => setModel('gpt-4o')}
        >
          <Flex
            borderRadius="full"
            justify="center"
            align="center"
            bg={bgIcon}
            me="10px"
            h="39px"
            w="39px"
          >
            <Icon
              as={MdAutoAwesome}
              width="20px"
              height="20px"
              color={iconColor}
            />
          </Flex>
          GPT-4o
        </Flex>
        <Flex
          cursor={'pointer'}
          transition="0.3s"
          justify={'center'}
          align="center"
          bg={model === 'gpt-3.5-turbo' ? buttonBg : 'transparent'}
          w="164px"
          h="70px"
          boxShadow={model === 'gpt-3.5-turbo' ? buttonShadow : 'none'}
          borderRadius="14px"
          color={textColor}
          fontSize="18px"
          fontWeight={'700'}
          onClick={() => setModel('gpt-3.5-turbo')}
        >
          <Flex
            borderRadius="full"
            justify="center"
            align="center"
            bg={bgIcon}
            me="10px"
            h="39px"
            w="39px"
          >
            <Icon as={MdBolt} width="20px" height="20px" color={iconColor} />
          </Flex>
          GPT-3.5
        </Flex>
      </Flex>

      <Accordion color={gray} allowToggle w="100%" my="0px" mx="auto">
        <AccordionItem border="none">
          <AccordionButton
            borderBottom="0px solid"
            maxW="max-content"
            mx="auto"
            _hover={{ border: '0px solid', bg: 'none' }}
            _focus={{ border: '0px solid', bg: 'none' }}
          >
            <Box flex="1" textAlign="left">
              <Text color={gray} fontWeight="500" fontSize="sm">
                No plugins added
              </Text>
            </Box>
            <AccordionIcon color={gray} />
          </AccordionButton>
          <AccordionPanel mx="auto" w="max-content" p="0px 0px 10px 0px">
            <Text
              color={gray}
              fontWeight="500"
              fontSize="sm"
              textAlign={'center'}
            >
              This is a cool text example.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default AiModeChange;
