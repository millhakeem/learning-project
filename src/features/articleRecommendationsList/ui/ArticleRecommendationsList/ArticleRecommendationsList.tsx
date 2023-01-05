import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('article-details');
        const { data: articles, isLoading } = useArticleRecommendationsList(3);

        if (isLoading || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid={'ArticleRecommendationsList'}
                gap='8'
                className={classNames('', {}, [className])}
            >
                <Text size='size_l' title={t('Рекомендуем')} />
                <ArticleList articles={articles} target='_blank' />
            </VStack>
        );
    },
);
