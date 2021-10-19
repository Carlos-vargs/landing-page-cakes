import React, { Fragment } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import bgImageSection1 from '../../../resources/images/bgImageIce.jpg'
import Btn from '../../Btn';

export default function Section5() {

    // add gallery images in carrusel 

    const fontsFamilies = ["'Pangolin', cursive", "sans-serif", 'Roboto']

    return (
        <Fragment>
                
            <Flex className="smt" position="relative" bgImg={`url(${bgImageSection1})`} color="white" w="full" h="740px" bgPosition={['top', 'top', 'top', 'center', 'center']} bgSize={['auto', 'auto', 'auto', 'cover', 'cover']} id="gallery">
                <Stack justifyContent="center" mx='auto' alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']} textAlign={['center', 'center', 'left', 'left', 'left']} direction="column" pl={[null, null, '60px', '128px', '128px']} w={['300px', '300px', '400px', '100%', '100%']} mt="-100px">
                    <Text as="h3" color="black" fontSize={['3rem', '3rem', '4rem', '5rem', '5rem']} fontFamily={fontsFamilies[0]} lineHeight="1.2em" zIndex="3" >Innovation through <br /> Designs.</Text>
                    <Text as="h4" color="#2b2b2b" fontFamily={`${fontsFamilies[2]},${fontsFamilies[1]}`} fontSize="16px" lineHeight="30px" letterSpacing="0.2px" mb="36px !important">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry <br />
                        with dummmy text. Graphics, Designing, Branding, Development
                    </Text>
                    <Btn
                        title={'LAUNCH PROJECT'}
                        bgColor={'transparent'}
                        textColor={'#2b2b2b'}
                        borderColor={'#2b2b2b'}
                        bgHoverColor={'#2b2b2b'}
                        textHoverColor={'white'}
                    />
                </Stack>
            </Flex>
        </Fragment>
    );
}
