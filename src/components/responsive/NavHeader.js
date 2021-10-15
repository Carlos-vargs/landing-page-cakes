import React, { Fragment, useState } from 'react';
import { Box, Flex, Link, Stack } from '@chakra-ui/layout';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import headerSvg from '../../resources/icons/headerSvg.svg'
import ContainerSocialNetwors from '../ContainerSocialNetwokrs'
import 'animate.css'
import '../styles/navHeader.css'

export default function NavHeader({ data, socialNetworks, dev, copyRight }) {

    const [isOpen, setisOpen] = useState(false)
    const [sizeTop, setSizeTop] = useState(0)

    const fontsFamilies = ["'Pangolin', cursive", "sans-serif"]

    function setOpen() {
        setisOpen(true)
    }

    function setClose() {
        setisOpen(false)
    }

    function handleClick() {
        if (isOpen) {
            setSizeTop(1000)

            setTimeout(() => {
                setClose()
            }, 600);

        } else {
            setSizeTop(0)

            setOpen()

        }
    }

    return (
        <Fragment>
            <Box onClick={handleClick} cursor="pointer" h="30px" w="30px">
                <MenuIcon />
            </Box>
            {
                isOpen && <Stack top={`${sizeTop}px`} transition="all 1s ease" className="animate__animated animate__fadeInUpBig" w="100%" pt={['26%', '26%', '30%', null, null]} bgColor="#EF7474" zIndex="12" left="0" position="absolute" bottom="-700em" cursor="pointer" fontSize="1.8rem" direction="column" fontFamily={fontsFamilies[0]} textColor="white" textAlign="center" >
                    <Box bgRepeat="repeat-x" w="100%" h="60px" top="-30px" position="absolute" bgImg={`url(${headerSvg})`} />
                    <Box position="absolute" w="38px" h="38px" right="39px" top="75px" onClick={handleClick} title="Close">
                        <XIcon />
                    </Box>
                    {
                        data.map(e => <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" h="56px" key={Math.random()} className="animate__animated animate__fadeInUp animate__delay-1s">
                            <Link href={e.url} className="active" textStyle="none" position="relative" userSelect="none" onClick={handleClick} color="white" >{e.title}</Link >
                        </Box>)
                    }
                    <Flex justifyContent="center" gridGap="14px" mt="24px !important">
                        {
                            socialNetworks.map(e => <ContainerSocialNetwors key={Math.random()} e={e} />)
                        }
                    </Flex>
                    <Flex fontFamily={fontsFamilies[1]} fontSize="13px" lineHeight="1.4rem" mt="28px !important" justifyContent="center" whiteSpace="pre-wrap">
                        {copyRight} <br />
                        {dev}
                    </Flex>
                </Stack>

            }
        </Fragment>
    );
}