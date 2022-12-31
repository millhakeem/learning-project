import { ArticleList } from '@/entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import {
    getArticlesPageError,
    getArticlesPageLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const articles = useSelector(getArticles.selectAll);
    const loading = useSelector(getArticlesPageLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return <Text title={t('Ошибка загрузки')} />;
    }

    return (
        <ArticleList
            classname={className}
            isLoading={loading}
            view={view}
            articles={articles}
        />
    );
});
