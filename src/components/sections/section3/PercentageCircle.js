import { Center, Stack } from '@chakra-ui/layout';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/progress';
import React from 'react';

export default function PercentageCircle({ title, percentage, percentageBar }) {

    return (
        <Stack alignItems="center" >
            <CircularProgress capIsRound="true" value={percentageBar} size="160px" color="#F5EEEE" thickness={'4px'} trackColor="#D3AD98" >
                <CircularProgressLabel fontSize="16px" >{percentage}%</CircularProgressLabel>
            </CircularProgress>
            <Center pt="38px" fontSize="14px" fontWeight="bold" >{title}</Center>
        </Stack>
    );
}