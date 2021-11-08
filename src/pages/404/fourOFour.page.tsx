import { NextPage } from 'next';
import React from 'react';

import { Center } from '../../ui/components';

interface FourOFourProps {}

export const FourOFour: NextPage<FourOFourProps> = () => {
    return (
        <Center>
            <h1 className="text-9xl">404, buddy.</h1>
        </Center>
    );
};
