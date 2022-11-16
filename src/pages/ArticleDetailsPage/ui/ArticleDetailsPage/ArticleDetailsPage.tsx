import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articleDetails');

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            Article Details Page
        </div>
    );
};

export default memo(ArticleDetailsPage);
