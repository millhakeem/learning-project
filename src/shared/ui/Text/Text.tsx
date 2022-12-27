import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export type TextSize = 'size_m' | 'size_l';

export type TextAlign = 'right' | 'left' | 'center';
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = 'left',
        size = 'size_m',
        'data-testid': dataTestId = 'Text',
    } = props;

    return (
        <div
            className={classNames(cls.Text, {}, [
                className,
                cls[theme],
                cls[align],
                cls[size],
            ])}
        >
            {title && (
                <p data-testid={`${dataTestId}.header`} className={cls.title}>
                    {title}
                </p>
            )}
            {text && (
                <p data-testid={`${dataTestId}.paragraph`} className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
