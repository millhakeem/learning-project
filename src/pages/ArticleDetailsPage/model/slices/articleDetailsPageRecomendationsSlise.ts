import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticleRecomendations } from '../services/fetchArticlesRecomendations/fetchArticlesRecomendations';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

const recomendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecomendations =
    recomendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recomendations ||
            recomendationsAdapter.getInitialState(),
    );

const articleDetailsPageRecomendationsSlice = createSlice({
    name: 'articleDetailsPageRecomendations',
    initialState:
        recomendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                entities: {},
                ids: [],
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleRecomendations.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchArticleRecomendations.fulfilled,
            (state, action) => {
                state.isLoading = false;
                recomendationsAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(
            fetchArticleRecomendations.rejected,
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        );
    },
});

export const { reducer: articleDetailsPageRecommendationsReducer } =
    articleDetailsPageRecomendationsSlice;
