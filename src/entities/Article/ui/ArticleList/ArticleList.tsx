import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

interface ArticleListProps {
    classname?: string;
    articles: Article[];
    target?: HTMLAttributeAnchorTarget;
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view == 'GREED' ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { classname, articles, view = 'GREED', isLoading, target } = props;
    const { t } = useTranslation('articles');
    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                target={target}
                view={view}
                key={article.id}
            />
        );
    };

    if (!isLoading && !articles?.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    classname,
                    cls[view],
                ])}
            >
                <Text size='size_l' title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [classname, cls[view]])}
        >
            {articles?.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
