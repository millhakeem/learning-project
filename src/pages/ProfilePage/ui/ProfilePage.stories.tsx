import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    id: '1',
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: {
            readonly: true,
            form: {
                id: '1',
                username: 'admin',
                age: 34,
                first: 'Shitty',
                lastname: 'Wizzard',
                city: 'Biysk',
                country: Country.Russia,
                currency: Currency.RUB,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            readonly: true,
            form: {
                id: '1',
                username: 'admin',
                age: 34,
                first: 'Shitty',
                lastname: 'Wizzard',
                city: 'Biysk',
                country: Country.Russia,
                currency: Currency.RUB,
            },
        },
    }),
];

export const DarkEditable = Template.bind({});
DarkEditable.args = {};
DarkEditable.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                id: '1',
                username: 'admin',
                age: 34,
                first: 'Shitty',
                lastname: 'Wizzard',
                city: 'Biysk',
                country: Country.Russia,
                currency: Currency.RUB,
            },
        },
    }),
];
