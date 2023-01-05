import { memo } from 'react';

import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface CommentCardProps {
    className?: string;
    isLoading?: boolean;
    comment?: Comment;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                data-testid='CommentCard.Loading'
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <HStack gap='16' align='center'>
                    <Skeleton width={30} height={30} border={'50%'} />
                    <Skeleton width={100} height={16} />
                </HStack>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            data-testid='CommentCard.Content'
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(comment.user.id)}>
                <HStack gap='16' align='center'>
                    {comment?.user?.avatar ? (
                        <Avatar size={30} src={comment.user.avatar} />
                    ) : null}
                    <Text title={comment.user.username} />
                </HStack>
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
