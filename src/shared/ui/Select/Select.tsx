import { ChangeEvent, useMemo } from 'react';

import { HStack } from '../Stack';

import cls from './Select.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option className={cls.option} value={opt.value} key={opt.value}>
                {opt.content}
            </option>
        ));
    }, [options]);

    return (
        <HStack gap='8' className={classNames('', {}, [className])}>
            {label && <span className={cls.label}>{label + ' >'}</span>}
            <select
                className={cls.select}
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </HStack>
    );
};
