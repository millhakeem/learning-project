import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const articleEditApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticle: build.query<Article, string>({
            query: (articleId) => ({
                url: `/articles/${articleId}`,
            }),
        }),
        // rateArticle: build.mutation<void, RateArticleArgs>({
        //     query: (args) => ({
        //         url: '/article-ratings',
        //         method: 'POST',
        //         body: args,
        //     }),
        // }),
    }),
});

export const useGetArticle = articleEditApi.useGetArticleQuery;
// export const useRateArticle = articleRatingApi.useRateArticleMutation;
