import styles from './Header.module.scss';

import { MainLayout } from '~layouts/MainLayout';

const Header = () => {
	return <MainLayout.Header className={styles.header} />;
};

export default Header;
