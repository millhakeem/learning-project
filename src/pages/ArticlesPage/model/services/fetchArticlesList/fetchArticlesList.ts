import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticleListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (args, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const { page = 1 } = args;
    const limit = getArticlesPageLimit(getState());

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
