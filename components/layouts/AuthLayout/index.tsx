import { FC, memo } from 'react';

import styles from './AuthLayout.module.scss';

const AuthLayout: FC = ({ children }) => {
	return (
		<main className={styles.layout}>
			<section className={styles.container}>{children}</section>
		</main>
	);
};

export default memo(AuthLayout);
