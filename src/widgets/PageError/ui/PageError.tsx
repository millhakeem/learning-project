import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <VStack
            align='center'
            justify='center'
            gap='8'
            className={classNames(cls.PageError, {}, [className])}
        >
            <p>{t('Непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить')}</Button>
        </VStack>
    );
};
