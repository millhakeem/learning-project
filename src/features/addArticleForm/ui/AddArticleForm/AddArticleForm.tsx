import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useCreateArticle } from '../../api/articleEditApi';

import cls from './AddArticleForm.module.scss';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface AddArticleFormProps {
    className?: string;
}

const inittialState = {
    img: '',
    title: '',
    subtitle: '',
    blocks: [],
    type: [],
};

export const AddArticleForm = memo((props: AddArticleFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const [useCreateArticleMutation] = useCreateArticle();
    const [articleForm, setArticleForm] = useState(inittialState);

    const changeTitleHandler = useCallback(
        (value: string) => {
            setArticleForm({ ...articleForm, title: value });
        },
        [articleForm],
    );

    const changeSubtitleHandler = useCallback(
        (value: string) => {
            setArticleForm({ ...articleForm, subtitle: value });
        },
        [articleForm],
    );

    const changeImageHandler = useCallback(
        (value: string) => {
            setArticleForm({ ...articleForm, img: value });
        },
        [articleForm],
    );

    const saveHandler = () => {
        try {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useCreateArticleMutation({
                ...articleForm,
                user: {
                    id: userData!.id,
                    username: userData!.username,
                },
                createdAt: Date.toLocaleString(),
                views: 0,
                blocks: [],
                type: ['IT'],
            });
            setArticleForm(inittialState);
            navigate('/articles');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <VStack
            max
            gap='32'
            className={classNames(cls.AddArticleForm, {}, [className])}
        >
            <HStack max justify='center'>
                <Text size='size_l' title={t('Создание статьи')} />
            </HStack>
            <VStack max gap='16'>
                <Input
                    value={articleForm.title}
                    placeholder={t('Название статьи')}
                    onChange={changeTitleHandler}
                />
                <Input
                    value={articleForm.subtitle}
                    placeholder={t('Подзаголовок статьи')}
                    onChange={changeSubtitleHandler}
                />
                <Input
                    value={articleForm.img}
                    placeholder={t('Ссылка на картинку')}
                    onChange={changeImageHandler}
                />
                <HStack max justify='end'>
                    <Button
                        onClick={saveHandler}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                    >
                        {t('Сохранить')}
                    </Button>
                </HStack>
            </VStack>
        </VStack>
    );
});
