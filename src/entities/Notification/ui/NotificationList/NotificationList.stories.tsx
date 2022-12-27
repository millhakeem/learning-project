import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Notification } from '../../model/types/notification';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

const notifications: Notification[] = [
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
            response: notifications,
        },
    ],
};
