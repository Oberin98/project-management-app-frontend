import '../styles/global.scss';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout || Fragment;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
