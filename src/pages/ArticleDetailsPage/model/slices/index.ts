import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlise';
import { articleDetailsPageRecomendationsReducer } from './articleDetailsPageRecomendationsSlise';

export const articlesDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recomendations: articleDetailsPageRecomendationsReducer,
        comments: articleDetailsCommentsReducer,
    });
