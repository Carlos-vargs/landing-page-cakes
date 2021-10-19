import React, { Fragment } from 'react';
import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/layout';
import bgImageSection6 from '../../../resources/images/bgImageIce6.jpg'
import EventPricingCard from './EventPricingCard';

export default function Section6() {

    const fontsFamilies = ["'Pangolin', cursive", "sans-serif", 'Roboto']

    const data = {
        standard: {
            category: 'standard',
            price: '36',
            services: [
                'Party Decoration',
                'Design Cake',
                'Home Delivery',
                'Ballon Decoration'
            ],
        },
        premium: {
            category: 'premium',
            price: '56',
            services: [
                'Decoration',
                'Wedding Cakes',
                'Waiter Service',
                'Flower Decoration'
            ],

        },
    }

    return (
        <Fragment>
            <Flex
                position="relative"
                bgImg={`url(${bgImageSection6})`}
                color="white"
                w="full"
                h={['1200px', '1200px', '1200px', '740px', '740px']}
                bgAttachment="fixed"
                bgPosition={['top', 'top', 'top', 'inherit', 'inherit']}
                bgSize={['auto', 'auto', 'auto', 'cover', 'cover']}
                id="pricing"
                className="smt"
            >
                <Stack alignItems="center" ml='auto' mr={['auto', 'auto', 'auto', '116px', '116px']} mt="60px">
                    <Text as="h3" fontSize="3rem" color="white" fontFamily={fontsFamilies[0]}>Event Pricing</Text>
                    <SimpleGrid spacingY="40px" columns={[1, 1, 1, 2, 2]}>
                        <Box borderRight={['none', 'none', 'none', 'dashed 1px #FFFFFF', 'dashed 1px #FFFFFF']} >
                            <EventPricingCard data={data.standard} />
                        </Box>
                        <EventPricingCard data={data.premium} />
                    </SimpleGrid>
                </Stack>
            </Flex>
        </Fragment>
    );
}
