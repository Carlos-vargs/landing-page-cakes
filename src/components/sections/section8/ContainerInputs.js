import React, { Fragment } from 'react';
import InputStyleS8 from './InputStyleS8';

export default function ContainerInputs() {
    return (
        <Fragment>
            <InputStyleS8
                placeholder="Your Name"
            />
            <InputStyleS8
                placeholder="Your Email"
            />
            <InputStyleS8
                placeholder="Your Subject"
            />
        </Fragment>
    );
}
