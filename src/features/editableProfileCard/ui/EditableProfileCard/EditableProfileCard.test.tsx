import { screen } from '@testing-library/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { profileReducer } from '../../model/slice/profileSlice';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { EditableProfileCard } from './EditableProfileCard';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 45,
    currency: Currency.USD,
    country: Country.Armenia,
    city: 'Moscow',
    username: 'admin',
};

describe('features/EditableProfileCard', () => {
    beforeEach(() => {
        ComponentRender(<EditableProfileCard id='1' />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: profile,
                    form: profile,
                },
                user: {
                    authData: {
                        id: '1',
                    },
                },
            },
            asyncReducers: { profile: profileReducer },
        });
    });

    test('Readonly should switch value', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('Values must return to previous values after Cancel button', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname'),
            'user',
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('Should be error', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.paragraph'),
        ).toBeInTheDocument();
    });

    test('PUT request should be sended if no validation errors', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
