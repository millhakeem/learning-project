/* eslint-disable indent */
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articlesDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articlesDetailsPageReducer,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
