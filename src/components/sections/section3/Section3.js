import React, { Fragment } from 'react';
import { Flex, SimpleGrid, Stack, Text } from '@chakra-ui/layout';
import bgImageSection3 from '../../../resources/images/bgImageIce3.jpg'
import PercentageCircle from './PercentageCircle';


export default function Section3() {

    const fontsFamilies = ["'Pangolin', cursive", "sans-serif", 'Roboto']

    const exp = [
        {
            title: 'wedding cakes',
            percentage: 257,
            pb: 80,
        },
        {
            title: 'chocolate fudge cake',
            percentage: 96,
            pb: 96,

        }, {
            title: 'macrons',
            percentage: 317,
            pb: 60,
        },
    ]

    return (
        <Fragment>
            <Flex
                position="relative"
                bgImg={`url(${bgImageSection3})`}
                color="white" w="full"
                className="smt"
                h={['1300px', '1330px', '1300px', '740px', '740px']}
                bgAttachment="fixed"
                bgPosition={['center', 'center', 'center', 'inherit', 'inherit']}
                bgSize='cover'
                pt="126px"
                pl={['0px', '0px', '0px', '122px', '122px']}
            >
                <Stack textTransform="capitalize" textAlign={['center', 'center', 'center', 'left', 'left']} mx={['auto', 'auto', 'auto', '0px', '0px']} >
                    <Text as="h6" color="white" fontFamily={fontsFamilies[0]} fontSize="17px" lineHeight="1.2" >45+ year of experience</Text>
                    <Text as="h2" color="white" fontFamily={fontsFamilies[0]} fontSize="40px" >our speciality</Text>
                    <SimpleGrid justifyContent="center" pt="74px" columns={[1, 1, 1, 3, 3, 3]} spacing={12}>
                        {
                            exp.map(e => <PercentageCircle
                                key={e.percentage * Math.random()}
                                title={e.title}
                                percentage={e.percentage}
                                percentageBar={e.pb}
                            />)
                        }
                    </SimpleGrid>
                </Stack>
            </Flex>
        </Fragment>
    );
}
