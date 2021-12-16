import cn from 'classnames';
import { ComponentPropsWithoutRef, FC } from 'react';

import styles from './MainLayout.module.scss';

interface LayoutElements {
	Header: FC<ComponentPropsWithoutRef<'header'>>;
	Sidebar: FC<ComponentPropsWithoutRef<'aside'>>;
	Content: FC<ComponentPropsWithoutRef<'main'>>;
}

type LayoutComponent = LayoutElements & FC<ComponentPropsWithoutRef<'div'>>;

const Layout: LayoutComponent = ({ children, className, ...props }) => {
	return (
		<div className={cn(styles.layout, className)} {...props}>
			{children}
		</div>
	);
};

const Sidebar: FC<ComponentPropsWithoutRef<'aside'>> = ({ children, className, ...props }) => {
	return (
		<aside className={cn(styles.sidebar, className)} {...props}>
			{children}
		</aside>
	);
};

const Header: FC<ComponentPropsWithoutRef<'header'>> = ({ children, className, ...props }) => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			{children}
		</header>
	);
};

const Content: FC<ComponentPropsWithoutRef<'main'>> = ({ children, className, ...props }) => {
	return (
		<main className={cn(styles.content, className)} {...props}>
			{children}
		</main>
	);
};

Layout.Sidebar = Sidebar;
Layout.Header = Header;
Layout.Content = Content;

export default Layout as LayoutComponent;
