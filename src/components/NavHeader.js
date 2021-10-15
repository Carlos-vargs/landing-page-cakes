import { Box, Link } from '@chakra-ui/layout';
import React, { Fragment } from 'react';

function NavHeader({ data }) {

    function handleClick(e) {
        localStorage.setItem('currentSection', JSON.stringify())
    }

    return (
        <Fragment>
            <Box display="flex" >
                {
                    data.map(e => <Box mx="20px" fontSize="19px"  display="flex" fontFamily="'Pangolin', cursive" flexDirection="column" alignItems="center" justifyContent="center" h="56px" key={Math.random()} >
                        <Link href={e.url}  userSelect="none" textDecoration="none" color="#2B2B2B" _hover={{ color: '#ef7474'}} onClick={handleClick()} >{e.title}</Link >
                    </Box>)
                }
            </Box>
        </Fragment>
    );
}

export default NavHeader;