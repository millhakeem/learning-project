/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */
/* eslint-disable millhakeems-plugin/public-api-imports */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useGetArticle } from '../../api/articleEditApi';

import cls from './ArticleEditPage.module.scss';

import { ArticleBlock, ArticleBlockType } from '@/entities/Article';
import { Article } from '@/entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from '@/entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '@/entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    const { t } = useTranslation(isEdit ? 'article-edit' : 'article-create');
    const { data: article, isLoading } = useGetArticle(id!);

    const [articleForEdit, setArticleForEdit] =
        useState<Article | undefined>(article);

    console.log(article);

    const paragraphHandler = () => {};
    const onChangeBlockTitle = () => {};

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <VStack
                        max
                        gap='8'
                        key={block.id}
                        className={cls.block}
                        align='end'
                    >
                        {block?.title && (
                            <Input
                                value={block.title}
                                className={cls.title}
                                onChange={onChangeBlockTitle}
                            />
                        )}
                        {block?.paragraphs?.map((paragraph) => (
                            <HStack max key={paragraph}>
                                <textarea
                                    rows={4}
                                    value={paragraph}
                                    className={cls.paragraph}
                                    onChange={paragraphHandler}
                                />
                            </HStack>
                        ))}
                    </VStack>
                );
            default:
                return null;
        }
    }, []);

    if (isLoading) {
        return null;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap='16' max align='center'>
                <Text size='size_l' title={t('Редактирование статьи')} />
                <VStack max gap='32'>
                    <HStack max justify='center'>
                        <Avatar
                            size={200}
                            src={article?.img}
                            className={cls.avatar}
                        />
                    </HStack>
                    <Input
                        value={article?.img}
                        placeholder={t('Ссылка на картинку')}
                    />
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size='size_l'
                    />
                    <VStack max gap='8'>
                        <Input
                            value={article?.title}
                            placeholder={t('Заголовок статьи')}
                        />
                        <Input
                            value={article?.subtitle}
                            placeholder={t('Подзаголовок настатьи')}
                        />
                    </VStack>

                    {article?.blocks.map(renderBlock)}
                </VStack>
            </VStack>
        </Page>
    );
    // return (
    //     <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
    //         {isEdit
    //             ? 'Редактирование статьи с ID = ' + id
    //             : 'Создание новой статьи'}
    //     </Page>
    // );
});

export default ArticleEditPage;
