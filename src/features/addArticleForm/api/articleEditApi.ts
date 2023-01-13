import { ArticleBlock, ArticleType } from '@/entities/Article';
import { User } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

interface ArticleCreateArgs {
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

const articleCreateApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        createArticle: build.mutation<void, ArticleCreateArgs>({
            query: (article) => ({
                url: '/articles',
                method: 'POST',
                body: {
                    article,
                },
            }),
        }),
    }),
});

export const useCreateArticle = articleCreateApi.useCreateArticleMutation;
