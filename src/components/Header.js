import { Box, Center, Flex } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import Logo from './Logo';
import NavHeaderResponsive from './responsive/NavHeader';
import headerSvg from '../resources/icons/headerSvg.svg'
import NavHeader from './NavHeader';

/*
    font-family: 'Pangolin', cursive;
    const fontsFamilies = ["'Pangolin', cursive", "sans-serif"]
*/

export default function Header({ copyRight, dev, socialNetworks }) {

    const nav = [
        { title: 'Home', url: '#home' },
        { title: 'About', url: '#about' },
        { title: 'Gallery', url: '#gallery' },
        { title: 'Pricing', url: '#pricing' },
        { title: 'Reviews', url: '#reviews' },
        { title: 'Order NOW', url: '#orderNow' },
    ]

    const userScren = window.screen.width

    return (
        <Fragment>
            <Flex justifyContent="space-between" as="header" w="full" top="0" h="90px" zIndex="25" position="fixed" bgColor="white">
                <Center ml={['20px', '20px', '30px', '46px', '46px']} >
                    <Logo sizeW={'116px'} sizeH={'66px'} colorWhite={false} />
                </Center>
                <Center mr={['20px', '20px', '30px', '46px', '46px']} display='flex'>
                    {
                        userScren > 1280
                            ? <NavHeader data={nav} />
                            : <NavHeaderResponsive data={nav} copyRight={copyRight} dev={dev} socialNetworks={socialNetworks} />
                    }
                </Center>
                <Box bgRepeat="repeat-x" w="100%" h="60px" top="52px" position="absolute" bgImg={`url(${headerSvg})`} />
            </Flex>
        </Fragment>
    );
}