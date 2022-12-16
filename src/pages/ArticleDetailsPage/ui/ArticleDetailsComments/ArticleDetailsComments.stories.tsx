import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        loki: { skip: true },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    id: '1',
};
Normal.decorators = [
    StoreDecorator({
        articleDetailsPage: {
            comments: {
                ids: ['1'],
                entities: {
                    '1': {
                        id: '1',
                        text: 'My back is my armor',
                        user: { id: '1', username: 'Bristleback' },
                    },
                },
            },
        },
    }),
];
