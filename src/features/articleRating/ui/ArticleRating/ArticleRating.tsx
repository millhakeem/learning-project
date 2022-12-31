import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article-details');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handlerateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                //handle error
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handlerateArticle(starsCount, feedback);
        },
        [handlerateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handlerateArticle(starsCount);
        },
        [handlerateArticle],
    );

    if (isLoading) {
        return <Skeleton width={'100%'} height='140' />;
    }
    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте отзыв')}
            hasFeedback
        />
    );
});

export default ArticleRating;
