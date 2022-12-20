import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlise';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecomendationsSlise';

export const articlesDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recomendations: articleDetailsPageRecommendationsReducer,
        comments: articleDetailsCommentsReducer,
    });
