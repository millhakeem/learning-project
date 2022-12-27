import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';

describe('fetchArticlesList.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesList, {
            articlesPage: {
                page: 1,
            },
        });

        await thunk.callthunk({});

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toBeCalledTimes(2);
    });
});
