import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecomendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recomendations: ArticleDetailsRecomendationsSchema;
}
