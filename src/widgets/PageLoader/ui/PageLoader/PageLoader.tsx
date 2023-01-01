import cls from './PageLoader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { HStack } from '@/shared/ui/Stack';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <HStack
            justify='center'
            className={classNames(cls.PageLoader, {}, [className])}
        >
            <Loader />
        </HStack>
    );
};
