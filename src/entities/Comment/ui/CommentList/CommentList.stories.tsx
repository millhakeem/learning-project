import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Hello there',
            user: { id: '1', username: 'Phantom Lancer' },
        },
        {
            id: '2',
            text: 'No pain - no gain',
            user: { id: '2', username: 'Akasha' },
        },
    ],
};
Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
