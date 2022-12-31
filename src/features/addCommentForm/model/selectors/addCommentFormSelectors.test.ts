import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('addCommentFormSelectors.test', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: '123',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toBe('123');
    });

    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toBe('');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
