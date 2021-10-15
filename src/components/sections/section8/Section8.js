import React, { Fragment } from 'react';
import { Flex, Box, Text } from '@chakra-ui/layout';
import bgImageSection8 from '../../../resources/images/bgImageIce8.jpg'
import { FormControl } from '@chakra-ui/form-control';
import { Textarea } from '@chakra-ui/textarea';
import ContainerInputs from './ContainerInputs';
import Btn from '../../Btn'

export default function Section8() {

    const fontsFamilies = ["'Pangolin', cursive", "'Roboto',sans-serif"]

    return (
        <Fragment>
            <Flex
                position="relative"
                bgImg={`url(${bgImageSection8})`}
                color="white"
                w="full"
                h="740px"
                bgAttachment="fixed"
                bgPosition={['top', 'top', 'top', 'inherit', 'inherit']}
                bgSize={['cover', 'cover', 'cover', 'inherit', 'inherit']}
                id="orderNow"
            >
                <Box ml="auto" mr={['auto', 'auto', 'auto', '130px', '130px']} mt="38px" textAlign={['center', 'center', 'center', 'left', 'left']} w={['260px', '260px', '260px', '512px', '512px']}>
                    <Text as="h4" fontSize="40px" fontFamily={fontsFamilies[0]} textTransform="capitalize">place your <strong>order</strong></Text>
                    <Text opacity="0.8" lineHeight="28px" fontFamily={fontsFamilies[1]} >Lorem ipsum is simply dummy text of the printing and typesetting <br /> industry with dummmy text</Text>
                    <FormControl as="fieldset" mt="36px">
                        <ContainerInputs />
                        <Textarea pt="20px" placeholder="Your message..." borderTop="0px" mb="40px" borderLeft="0px" borderRight="0px" borderRadius="none" _placeholder={{ color: 'white' }} />
                        <Btn
                            title={'Send Message'}
                            bgColor={'white'}
                            textColor={'#2b2b2b'}
                            borderColor={'transparent'}
                            bgHoverColor={'#ef7474'}
                            textHoverColor={'white'}
                            modifyTheWidth="full"
                        />
                    </FormControl>
                </Box>

            </Flex>
        </Fragment>
    );
}
