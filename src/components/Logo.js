import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import logoWithWhiteLetters from '../resources/images/newlogo2.png'
import logoWithBlackLetters from '../resources/images/newlogo3.png'

export default function Logo({ sizeW, sizeH, colorWhite }) {
    return (
        <Box objectFit="cover" >
            {
                colorWhite
                    ? <Image src={logoWithBlackLetters} w={sizeW} h={sizeH} />
                    : <Image src={logoWithWhiteLetters} w={sizeW} h={sizeH} />

            }
        </Box>
    );
}
