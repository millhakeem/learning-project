import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecomendationsLoading = (state: StateSchema) =>
    state.articleDetailsRecomendations?.isLoading;

export const getArticleRecomendationsError = (state: StateSchema) =>
    state.articleDetailsRecomendations?.error;
