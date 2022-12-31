import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getArticlesPageHasMore,
    getArticlesPageLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const loading = getArticlesPageLoading(getState());

        if (hasMore && !loading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
