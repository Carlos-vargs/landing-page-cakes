import { Input } from '@chakra-ui/input';
import React, { Fragment } from 'react';

export default function InputStyleS8({ placeholder }) {
    return (
        <Fragment>
            <Input
                placeholder={`${placeholder}*`}
                color="white"
                borderTop="0px"
                borderLeft="0px"
                borderRight="0px"
                mb="12px !important"
                borderRadius="none"
                _placeholder={{ color: 'white'}}
            />
        </Fragment>
    );
}
