import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => setValue(val);

    return (
        <div>
            {t('Главная страница')}
            <Input value={value} onChange={onChange} />
        </div>
    );
};

export default MainPage;
