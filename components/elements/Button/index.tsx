import cn from 'classnames';
import { ComponentPropsWithoutRef, FC, memo } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	icon?: JSX.Element;
	variant?: 'sidebar';
	hovered?: boolean;
}

const Button: FC<ButtonProps> = ({ type = 'button', variant, hovered, className, children, icon, ...props }) => {
	return (
		<button
			type={type}
			className={cn(styles.button, styles[variant], { [styles.hovered]: hovered }, className)}
			{...props}
		>
			{icon && <span className={styles.icon}>{icon}</span>}
			{children && <span className={styles.content}>{children}</span>}
		</button>
	);
};

export default memo(Button);
