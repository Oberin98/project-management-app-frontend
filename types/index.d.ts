/// <reference path="./next.d.ts" />

type Prefer<T extends Record<string, any>, K extends Record<string, any>> = T & Omit<K, keyof T>;

type SvgrComponent = React.FC<React.SVGProps<SVGSVGElement>>;

declare module '*.svg' {
	const value: SvgrComponent;
	export default value;
}
