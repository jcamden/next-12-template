import { NextPage } from 'next';
import React from 'react';

import { Center } from '../../ui/components';

interface FiveHundredProps {}

export const FiveHundred: NextPage<FiveHundredProps> = () => {
    return (
        <Center>
            <h1 className="text-9xl">500, pal.</h1>
        </Center>
    );
};
