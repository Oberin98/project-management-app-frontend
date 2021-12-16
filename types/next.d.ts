import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { FC } from 'react';

declare global {
	type NextPageWithLayout<T extends Record<string, any> = Record<string, any>> = NextPage & {
		Layout?: FC<T>;
	};

	type AppPropsWithLayout = AppProps & {
		Component:  NextPageWithLayout;
	};
}
