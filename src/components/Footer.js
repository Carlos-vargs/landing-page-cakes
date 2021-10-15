import React, { Fragment } from 'react';
import { Box, Center, Flex, Stack } from '@chakra-ui/layout';
import footerSvg from '../resources/icons/footerSvg.svg'
import ContainerSocialNetworks from './ContainerSocialNetwokrs';
import Logo from './Logo'

export default function Footer({ socialNetworks, dev, copyRight }) {
    return (
        <Fragment>
            <Flex as="footer" justifyContent="center" w="full" py="120px" bgColor="#EF7474" position="relative">
                <Box bgRepeat="repeat-x" w="100%" h="60px" top="-28px" transform="rotate(180deg)" position="absolute" bgImg={`url(${footerSvg})`} />
                <Stack direction="column" objectFit="cover" >
                    <Center>
                        <Logo sizeW={['116px', '116px', '130px', '200px', '200px']} sizeH={['66px', '66px', '70px', '120px', '120px']} colorWhite={true} />
                    </Center>
                    <Stack direction="column" mt="46px !important">
                        <Center gridGap="18px">
                            {
                                socialNetworks.map(e => <ContainerSocialNetworks key={Math.random()} e={e} />)
                            }
                        </Center>
                        <Center textAlign="center" fontSize="13px" color="white" lineHeight="1.4rem" mt="28px !important" justifyContent="center" whiteSpace="pre-wrap">
                            {copyRight} <br />
                            {dev}
                        </Center>
                    </Stack>
                </Stack>
            </Flex>
        </Fragment>
    );
}