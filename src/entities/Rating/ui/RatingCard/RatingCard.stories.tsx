import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    feedbackTitle: 'Заголовок',
    title: 'Оставьте отзыв',
    hasFeedback: true,
};

export const WithStars = Template.bind({});
WithStars.args = {
    feedbackTitle: 'Заголовок',
    title: 'Оставьте отзыв',
    hasFeedback: true,
    rate: 3,
};
