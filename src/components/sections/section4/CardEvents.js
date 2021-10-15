import React, { Fragment } from 'react';
import { Stack, Box, Text } from '@chakra-ui/layout'


export default function CardEvents({ icon, count, title }) {

    const fontsFamilies = ["'Pangolin', cursive", "sans-serif", 'Roboto']

    return (
        <Fragment>
            <Stack
                justifyContent="center"
                textAlign="center"
                textTransform="capitalize"
                cursor="pointer"
                borderRadius="full"
                h='160px'
                w="160px"
                p="20px"
                userSelect="none"
                transition='all 1s ease'
                _hover={{ 
                    backgroundColor: 'white',
                    '&>div,h4,h5': {
                        color: '#2b2b2b',
                    },
                 }}
            >
                <Box w="30px" h="30px"  mx="auto">
                    {icon}
                </Box>
                <Text as="h4" fontSize="30px" fontFamily={fontsFamilies[0]}>{count}</Text>
                <Text as="h5" fontFamily={`${fontsFamilies[2]},${fontsFamilies[1]}`} >{title}</Text>
            </Stack>
        </Fragment>
    );
}

