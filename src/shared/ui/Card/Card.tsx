import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    classname?: string;
    children: ReactNode;
}

export const Card = (props: CardProps) => {
    const { classname, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, {}, [classname])} {...otherProps}>
            {children}
        </div>
    );
};
