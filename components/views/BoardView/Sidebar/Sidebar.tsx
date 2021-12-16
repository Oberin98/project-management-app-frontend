import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './Sidebar.module.scss';
import { navigation } from './utils';

import { Button } from '~elements';
import { LogoIcon, LogoutIcon } from '~icons';
import { MainLayout } from '~layouts/MainLayout';

const Sidebar: FC = () => {
	const router = useRouter();

	return (
		<MainLayout.Sidebar className={styles.sidebar}>
			<div className={styles.header}>
				<span className={styles.logoIcon}>
					<LogoIcon width="38px" height="38px" />
				</span>
				<span className={styles.logoName}>Splasher</span>
			</div>
			<nav className={styles.navigation}>
				{navigation.map(({ Icon, label, pathname, disabled }) => (
					<Button
						key={label}
						icon={<Icon />}
						disabled={disabled}
						variant="sidebar"
						hovered={router.pathname.includes(pathname)}
						className={styles.button}
					>
						{label}
					</Button>
				))}
			</nav>
			<div className={styles.footer}>
				<Button disabled variant="sidebar" icon={<LogoutIcon />}>
					Logout
				</Button>
			</div>
		</MainLayout.Sidebar>
	);
};

export default Sidebar;
