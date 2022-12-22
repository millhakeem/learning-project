/* eslint-disable quotes */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Text } from '../../../Text/Text';
import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>PUSH ME!</Button>,
    direction: 'bottom right',
    children: (
        <div style={{ minWidth: 200 }}>
            <p>Hello my freind</p>
            <Text title={"Item's title"} text={"Item's text"} />
        </div>
    ),
};
