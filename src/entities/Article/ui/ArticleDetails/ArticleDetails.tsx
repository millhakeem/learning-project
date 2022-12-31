/* eslint-disable max-len */
/* eslint-disable indent */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import ViewsIcon from '@/shared/assets/icons/views.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { ArticleBlockType } from '../../model/consts/consts';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsisLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent copy/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsisLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

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
                    <ArticleTextBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            default:
                return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border={'50%'}
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={200}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={200}
                />
            </>
        );
    } else if (error) {
        content = <Text align='center' title={t('Ошибка загрузки статьи')} />;
    } else {
        content = (
            <>
                <HStack>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap='8'>
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size='size_l'
                    />
                    <HStack gap='8'>
                        <Icon Svg={ViewsIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap='8'>
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>

                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
