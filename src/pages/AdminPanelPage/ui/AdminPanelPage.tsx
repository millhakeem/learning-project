import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';

interface AdminPanelpageProps {
    className?: string;
}

const AdminPanelPage = (props: AdminPanelpageProps) => {
    const { className } = props;
    const { t } = useTranslation('admin-panel');
    return (
        <Page className={classNames('', {}, [className])}>
            {t('Панель администратора')}
        </Page>
    );
};

export default AdminPanelPage;
