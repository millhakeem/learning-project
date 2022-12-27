import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecomendationsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recomendations.isLoading;

export const getArticleRecomendationsError = (state: StateSchema) =>
    state.articleDetailsPage?.recomendations.error;
