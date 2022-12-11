import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: '1',
    direction: 'bottom',
    label: 'Укажите значение',
    items: [
        { value: '1', content: 'Пункт 1' },
        { value: '2', content: 'Пункт 2' },
        { value: '3', content: 'Пункт 3' },
        { value: '4', content: 'Пункт 4' },
    ],
    onChange: action,
};

export const Dark = Template.bind({});
Dark.args = {
    value: '1',
    direction: 'bottom',
    label: 'Укажите значение',
    items: [
        { value: '1', content: 'Пункт 1' },
        { value: '2', content: 'Пункт 2' },
        { value: '3', content: 'Пункт 3' },
        { value: '4', content: 'Пункт 4' },
    ],
    onChange: action,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithLockedOptions = Template.bind({});
DarkWithLockedOptions.args = {
    value: '1',
    direction: 'bottom',
    label: 'Укажите значение',
    items: [
        { value: '1', content: 'Пункт 1' },
        { value: '2', content: 'Пункт 2', disabled: true },
        { value: '3', content: 'Пункт 3', disabled: true },
        { value: '4', content: 'Пункт 4' },
    ],
    onChange: action,
};
DarkWithLockedOptions.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    value: '1',
    direction: 'bottom',
    label: 'Выберите значение',
    items: [
        { value: '1', content: 'Пункт 1' },
        { value: '2', content: 'Пункт 2' },
        { value: '3', content: 'Пункт 3' },
        { value: '4', content: 'Пункт 4' },
    ],
    onChange: action,
    readonly: true,
};
