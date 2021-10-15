import React, { Fragment } from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import bgImageSection7 from '../../../resources/images/bgImageIce7.jpg'
import { Image } from '@chakra-ui/image';
import StarIcon from '../section4/StarIcon'
import  imageProfile from '../../../resources/images/profileReview.jpg'

export default function Section7() {

    const fontsFamilies = ["'Pangolin', cursive", "'Roboto', sans-serif"]

    return (
        <Fragment>
            <Flex
                position="relative"
                bgImg={`url(${bgImageSection7})`}
                color="white"
                w="full"
                h="740px"
                bgAttachment="fixed"
                bgPosition={['top', 'top', 'top', 'center', 'center']}
                bgSize='cover'
                id="reviews"
            >
                <Box
                    borderRadius="2xl"
                    ml={['0px', '0px', '0px', '150px', '150px']}
                    mx="auto"
                    mt='90px'
                    boxShadow="lg"
                    bgColor="white"
                    h="340px"
                    w={['300px', '300px', '300px', '374px', '374px']}
                    position="relative"
                    pt="30px"
                    px="26px"
                >
                    <Text color="#696969" textAlign="center" lineHeight="30px" fontFamily={fontsFamilies[1]}  >
                        Ligia's patisserie is the best patisserie,
                        all the staff are highly trained and there
                        is no dessert that is not excellent.
                    </Text>
                    <Text as="time" display="block" mt="20px" textAlign="center" datetime="14-10-2021" color="#696969" fontSize="14px" mx="auto"><i>14-October-2021</i></Text>
                    <Flex color="black" w="100px" gridGap="4px" mx="auto" mt="20px">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </Flex>
                    <Image
                        objectFit="cover"
                        boxShadow="lg"
                        border="solid 1px white"
                        position="absolute"
                        borderRadius="full"
                        h="120px"
                        w="120px"
                        bgColor="red.100"
                        bottom="-64px"
                        left={['30%', '30%', '30%', '33%', '33%']}
                        src={imageProfile}
                    />

                </Box>
            </Flex>

        </Fragment>
    );
}
