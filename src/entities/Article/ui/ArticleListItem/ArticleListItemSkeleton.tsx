import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    classname?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { classname, view = 'GREED' } = props;

    if (view === 'LIST') {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [classname, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border={'50%'} />
                        <Skeleton height={16} width={150} className={cls.username} />
                        <Skeleton height={16} width={150} className={cls.date} />
                    </div>
                    <Skeleton height={24} width={250} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [classname, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} className={cls.title} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
