import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PotalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PotalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
