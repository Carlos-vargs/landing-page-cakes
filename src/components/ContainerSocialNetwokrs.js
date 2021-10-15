import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import { Link } from '@chakra-ui/layout';


export default function ContainerSocialNetworks({e}) {
    return (
        <Fragment>
            <Link href={e.url} pl={e.pl} textColor="white" pt={e.pt} isExternal display="flex" w="20px" h="20px" title={e.socialNetwork}>
                {parse(e.iconSvg)}
            </Link>
        </Fragment>
    );
}