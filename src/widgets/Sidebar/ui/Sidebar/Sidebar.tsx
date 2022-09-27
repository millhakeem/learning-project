import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const { className } = props;

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div 
            data-testid='sidebar'
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button 
                data-testid='sidebar-toggle'
                onClick={onToggle}
            >
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher /> 
            </div>
        </div>
    );
};
