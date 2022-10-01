import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
    className?: string;
  }

const MainPage = (props: MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;