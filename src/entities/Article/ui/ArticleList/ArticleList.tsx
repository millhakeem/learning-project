import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    classname?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { classname, articles, view = 'GREED', isLoading } = props;
    // const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [classname, cls[view]])}>
                {new Array(view == 'GREED' ? 9 : 3).fill(0).map((item, index) => (
                    <ArticleListItemSkeleton key={index} view={view} />
                ))}
            </div>
        );
    }

    const renderArticle = (article: Article) => {
        return <ArticleListItem article={article} view={view} key={article.id} />;
    };

    return (
        <div className={classNames(cls.ArticleList, {}, [classname, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});
