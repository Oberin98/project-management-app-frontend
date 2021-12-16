import cn from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from './Columns.module.scss';

export type ColumnsProps = ComponentPropsWithoutRef<'div'>;

const Columns = forwardRef<HTMLDivElement, ColumnsProps>(({ children, className, ...props }, ref) => {
	return (
		<div ref={ref} className={cn(styles.columns, className)} {...props}>
			{children}
		</div>
	);
});

export default Columns;
