import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { HStack } from 'shared/ui/Stack';
import cls from './PageLoader.module.scss';

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
