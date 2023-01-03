import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    paddingLeft: 400,
                    paddingTop: 100,
                }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

const response = [
    {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
    },
    {
        id: '2',
        title: 'Уведомление 2',
        description: 'Произошло какое-то событие',
        href: 'admin',
    },
    {
        id: '3',
        title: 'Уведомление 3',
        description: 'Произошло какое-то событие',
        href: 'admin',
    },
];

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: response,
        },
    ],
};
