import { getProfileLoading } from './getProfileLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileLoading.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
    });
});
