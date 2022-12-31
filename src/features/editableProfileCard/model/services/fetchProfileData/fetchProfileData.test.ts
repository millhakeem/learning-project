import { fetchProfileData } from './fetchProfileData';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data = {
    username: 'admin',
    age: 34,
    first: 'Shitty',
    lastname: 'Wizzard',
    city: 'Biysk',
    country: Country.Russia,
    currency: Currency.RUB,
};

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callthunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callthunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
