import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';
import { RoutePath } from '@/shared/const/router';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation('forbidden');

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap='16' align='center'>
                <Text title={t('Запрещенная страница')} size='size_l' />
                <AppLink to={RoutePath.main}>
                    <Text title={t('На главную')} />
                </AppLink>
            </VStack>
        </Page>
    );
});

export default ForbiddenPage;
