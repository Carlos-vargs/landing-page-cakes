import React, { Fragment } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import bgImageSection1 from '../../../resources/images/bgImageIce.jpg'
import Btn from '../../Btn';

export default function Section1() {

    const fontsFamilies = ["'Pangolin', cursive", "sans-serif", 'Roboto']

    return (
        <Fragment>
            <Flex position="relative" bgImg={`url(${bgImageSection1})`} color="white" w="full" h="740px" bgAttachment="fixed" bgPosition={['top', 'top', 'top', 'center', 'center']} bgSize={['auto', 'auto', 'auto', 'cover', 'cover']} id="home">
                <Stack
                    justifyContent="center"
                    mx='auto'
                    alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']}
                    textAlign={['center', 'center', 'left', 'left', 'left']}
                    direction="column" pl={[null, null, '60px', '128px', '128px']}
                    w={['300px', '300px', '400px', '100%', '100%']}
                    mt={['0px', '0px', '0px', '-100px', '-100px']}
                >
                    <Text as="h3" fontSize={['3rem', '3rem', '4rem', '5rem', '5rem']} fontFamily={fontsFamilies[0]} lineHeight="1.2em" zIndex="3" >Ice Cream <br /> Cakes</Text>
                    <Text as="h4" fontFamily={`${fontsFamilies[2]},${fontsFamilies[1]}`} fontSize="16px" lineHeight="30px" letterSpacing="0.2px" mb="36px !important">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry <br />
                        with dummmy text. Graphics, Designing, Branding, Development
                    </Text>
                    <Btn
                        title={'Learn More'}
                        bgColor={'transparent'}
                        color={'white'}
                        borderColor={'white'}
                        bgHoverColor={'white'}
                        textHoverColor={'#585858'}
                    />
                </Stack>
            </Flex>
        </Fragment>
    );
}
