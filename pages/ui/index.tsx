import { FC } from 'react';

import styles from './UiPage.module.scss';

const UiPage: FC = () => {
	return (
		<main className={styles.page}>
			<div className={styles.box} />
		</main>
	);
};

export default UiPage;
