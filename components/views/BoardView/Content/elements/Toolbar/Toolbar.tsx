import cn from 'classnames';
import { FC } from 'react';

import styles from './Toolbar.module.scss';

interface ToolbarProps {
	className?: string;
}

const Toolbar: FC<ToolbarProps> = ({ className }) => {
	return <div className={cn(styles.toolbar, className)} />;
};

export default Toolbar;
