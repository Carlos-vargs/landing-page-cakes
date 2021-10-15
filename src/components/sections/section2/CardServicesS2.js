import React, { Fragment } from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout'
import { ArrowRightIcon } from '@heroicons/react/outline'

export default function CardServicesS2({ title, description, icon }) {

    const fontsFamilies = ["'Pangolin', cursive", "sans-serif", 'Roboto']


    return (
        <Fragment>
            <Stack
                h="222px"
                w="236px"
                border="solid 2px #ef7474"
                borderRadius="3xl"
                boxShadow="lg"
                transition="all 0.8s ease"
                cursor="pointer"
                _hover={{
                    backgroundColor: '#ef7474',
                    '&>div': {
                        backgroundColor: 'white',
                        color: '#ef7474',
                    }
                }}

                pl={['0px', '0px', '0px', '24px', '24px']}
                pt='18px'
                justifyContent="flex-start"
                alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']}
            >
                <Flex
                    transition="all 0.8s ease"
                    borderRadius="full"
                    w="56px"
                    h="56px"
                    bgColor="#ef7474"
                    color="white"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box w="30px" h="30px" >
                        {icon}
                    </Box>
                </Flex>
                <Text as="h5" mt="12px !important " fontFamily={fontsFamilies[0]} textTransform="capitalize" fontSize="20px" >{title}</Text>
                <Text px={['26px', '26px', '26px', '0px', '0px']} mt="16px" fontSize="12px" lineHeight="24px" textAlign={['center', 'center', 'center', 'left', 'left']} fontFamily={`${fontsFamilies[2]}, ${fontsFamilies[1]}`} >{description}</Text>
                <Box as="span" w="18px" h="18px" ml="auto !important" mr="22px !important" mt="auto !important" mb="20px !important" >
                    <ArrowRightIcon />
                </Box>
            </Stack>
        </Fragment>
    );
}