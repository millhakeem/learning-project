import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 34,
        first: 'Shitty',
        lastname: 'Wizzard',
        city: 'Biysk',
        country: Country.Russia,
        currency: Currency.RUB,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
