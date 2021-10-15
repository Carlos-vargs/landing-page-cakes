import { Button } from '@chakra-ui/button';
import React, { Fragment } from 'react';

export default function Btn({ title, bgColor, bgHoverColor, textColor, textHoverColor, borderColor, modifyTheHeight, modifyTheFontSize, modifyTheWidth }) {
    return (
        <Fragment>
            <Button
                py="18px"
                borderRadius="3xl"
                w={modifyTheWidth ? modifyTheWidth : '170px'}
                h={modifyTheHeight ? modifyTheHeight : "50px"}
                fontSize={modifyTheFontSize && modifyTheFontSize}
                color={textColor}
                bgColor={bgColor}
                borderWidth="2px"
                borderColor={borderColor}
                transition="all 0.5s ease"
                fontFamily="'Roboto', sans-serif"
                _hover={{
                    backgroundColor: bgHoverColor,
                    color: textHoverColor,
                }}

            >
                {title}
            </Button>
        </Fragment>
    );
}