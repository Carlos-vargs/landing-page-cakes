import React, { Fragment } from 'react';
import { Center, Flex, Stack } from '@chakra-ui/layout';
import { CakeIcon } from '@heroicons/react/outline';
import bgImageSection4 from '../../../resources/images/bgImageIce4.jpg'
import CardEvents from './CardEvents';
import SmileBeamIcon from './SmileBeamIcon'
import GlassCheersIcon from './GlassCheersIcon'
import StarIcon from './StarIcon'
import CocktailIcon from './CocktailIcon'

export default function Section4() {

    const dataCard = [
        {
            title: 'events',
            icon: <StarIcon />,
            count: '35M',
        },
        {
            title: 'happy clients',
            icon: <SmileBeamIcon />,
            count: '70K',
        },
        {
            title: 'weddings',
            icon: <GlassCheersIcon />,
            count: '70K',
        },
    ]

    const dataCard2 = [
        {
            title: 'custom cakes',
            icon: <CakeIcon />,
            count: '70K',
        },
        {
            title: 'Birthday Party',
            icon: <CocktailIcon />,
            count: '70K',
        },
    ]

    return (
        <Fragment>
            <Flex
                position="relative"
                bgImg={`url(${bgImageSection4})`}
                color="white"
                h="740px"
                className="smt"
                w="full"
                justifyContent={['center', 'center', 'center', 'flex-end', 'flex-end']}
                bgAttachment="fixed"
                bgPosition={['bottom', 'bottom', 'bottom', 'inherit', 'inherit']}
                bgSize={['auto', 'auto', 'auto', 'cover', 'cover']}
                pr={['0px', '0px', '0px', '160px', '160px']}
            >
                <Center>
                    <Stack gridGap="40px" >
                        <Center flexWrap="wrap" gridGap="40px" ml={['0px', '0px', '0px', 'auto', 'auto']}>
                            {
                                dataCard.map(e => <CardEvents
                                    key={Math.random()}
                                    title={e.title}
                                    icon={e.icon}
                                    count={e.count}
                                />)
                            }
                        </Center>
                        <Center gridGap="40px" >
                            {
                                dataCard2.map(e => <CardEvents
                                    key={Math.random()}
                                    title={e.title}
                                    icon={e.icon}
                                    count={e.count}
                                />)
                            }
                        </Center>
                    </Stack>
                </Center>
            </Flex>
        </Fragment>
    );
}
