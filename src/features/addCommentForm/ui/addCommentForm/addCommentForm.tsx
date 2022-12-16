import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { HStack } from 'shared/ui/Stack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import cls from './addCommentForm.module.scss';

interface addCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const addCommentForm = memo((props: addCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                max
                justify='between'
                gap='16'
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    placeholder={t('комментарий')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler}>{t('Отправить')}</Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default addCommentForm;
