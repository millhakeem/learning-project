import { InputHTMLAttributes, memo } from 'react';

import { HStack } from '../Stack';

import cls from './Input.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    classNames?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
    placeholder?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        readonly,
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <HStack max gap='8' className={classNames('', mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{placeholder + ' >'}</div>
            )}
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readonly}
                {...otherProps}
            />
        </HStack>
    );
});
