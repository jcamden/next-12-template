import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Center, CenterProps } from './';

export default {
    title: 'Example/Center',
    component: Center,
} as Meta;

const Template: Story<CenterProps> = (args) => <Center {...args} />;

export const MeowCenter = Template.bind({});
MeowCenter.args = { children: <div className="text-black">meow</div> };

export const WoofCenter = Template.bind({});
WoofCenter.args = { children: <div className="text-black">woof</div> };
