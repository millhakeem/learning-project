import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.comments || commentAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchCommentsByArticleId.fulfilled,
            (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articleDetailsCommentsReducer } =
    articleDetailsCommentsSlice;
