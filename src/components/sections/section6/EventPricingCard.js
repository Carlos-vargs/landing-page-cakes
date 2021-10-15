import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/layout';
import React from 'react';
import { Fragment } from 'react';
import Btn from '../../Btn';

export default function EventPricingCard(data) {

    const fontsFamilies = ["'Pangolin', cursive", "'Roboto', sans-serif"]

    return (
        <Fragment>
            <Box px="40px" textAlign="center">
                <Text as="h3" borderBottom="dashed 1px #FFFFFF" fontSize="26px" textTransform="capitalize" fontFamily={fontsFamilies[0]} pb="4px">{data.data.category}</Text>
                <Text pt="27px" fontFamily={fontsFamilies[1]}>
                    Lorem dolor sit amet, consectetur <br />
                    adipiscing elit.
                </Text>
                <Text pt="24px" fontSize="38px" as="h6" fontFamily={fontsFamilies[0]} >${data.data.price} <Text as="span" fontSize="14px">/Per Event</Text></Text>
                <UnorderedList ml="0px !important" styleType="none" pt="22px" spacing="16px" fontFamily={fontsFamilies[1]}>
                    {
                        data.data.services.map(e => <ListItem key={Math.random()*12} >{e}</ListItem>)
                    }
                </UnorderedList>
                <Flex justifyContent="center" mt="34px" w="100px" mx="auto" >
                    <Btn
                        title={'Choose'}
                        bgColor={'transparent'}
                        bgHoverColor={'white'}
                        textColor={'white'}
                        textHoverColor={'#585858 '}
                        borderColor={'white'}
                        modifyTheHeight={'30px'}
                        modifyTheFontSize={'14px'}
                    />
                </Flex>
            </Box>
        </Fragment>
    );
}
