import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'Hello there',
        user: { id: '1', username: 'Phantom Lancer' },
    },
};
Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
