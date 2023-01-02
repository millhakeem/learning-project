import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleSortSelector.module.scss';

import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/Select';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, order, onChangeOrder, sort, onChangeSort } = props;
    const { t } = useTranslation('articles');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дата'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('название'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотры'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
                label={t('Сортировать')}
            />
            <Select<SortOrder>
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                label={t('по')}
            />
        </div>
    );
});
