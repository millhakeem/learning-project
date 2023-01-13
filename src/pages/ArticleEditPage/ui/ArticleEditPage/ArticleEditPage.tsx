import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { AddArticleForm } from '@/features/addArticleForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    const { t } = useTranslation(isEdit ? 'article-edit' : 'article-create');

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? 'Редактирование статьи с ID = ' + id : <AddArticleForm />}
        </Page>
    );
});

export default ArticleEditPage;
