import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AddArticleForm } from './AddArticleForm';

export default {
    title: 'shared/AddArticleForm',
    component: AddArticleForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddArticleForm>;

const Template: ComponentStory<typeof AddArticleForm> = (args) => (
    <AddArticleForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
