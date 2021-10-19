import React, { Fragment } from 'react';
import { Box, Center, Flex, Stack } from '@chakra-ui/layout';
import bgImageSection2 from '../../../resources/images/bgImageIce2.jpg'
import CardServicesS2 from './CardServicesS2';
import { CakeIcon } from '@heroicons/react/outline';
import GloveIcon from './GloveIcon';
import IceCreamIcon from './IceCreamIcon';

export default function Section2() {

    const description = 'Simply dummy text of the print has been standard.'

    return (
        <Fragment>
            <Flex
                position="relative"
                bgImg={`url(${bgImageSection2})`}
                color="white"
                w="full"
                className="smt"
                h={['900px', '900px', '900px', '586px', '586px']}
                bgAttachment="fixed"
                bgPosition='top'
                bgSize={['auto', 'auto', 'auto', 'cover', 'cover']}
                justifyContent={['center', 'center', 'center', 'flex-end', 'flex-end']}
                paddingInlineEnd={['0px', '0px', '0px', '152px', '152px']}
                id="about"
            >
                <Center>
                    <Box display={['grid', 'grid', 'grid', 'flex', 'flex']} gridColumn={[1, 1, 1, 0, 0]} gridGap="18px" >
                        <Box alignSelf="center" >
                            <CardServicesS2
                                title={'cake design'}
                                description={description}
                                icon={<GloveIcon />}
                            />
                        </Box>
                        <Stack direction="column" gridGap="10px" >
                            <CardServicesS2
                                title={'best cake'}
                                description={description}
                                icon={<CakeIcon />}
                            />
                            <CardServicesS2
                                title={'Dessert'}
                                description={description}
                                icon={<IceCreamIcon />}
                            />
                        </Stack>
                    </Box>
                </Center>
            </Flex>
        </Fragment>
    );
}
