import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
    classname?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { classname, value, onChangeType } = props;
    const { t } = useTranslation('articles');

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: 'ALL',
                content: t('Все'),
            },
            {
                value: 'IT',
                content: t('Айти'),
            },
            {
                value: 'ECONOMICS',
                content: t('Экономика'),
            },
            {
                value: 'SCIENCE',
                content: t('Наука'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [classname])}
        />
    );
});
