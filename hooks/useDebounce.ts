import { useCallback } from 'react';
import { debounce, DebounceSettings, DebouncedFunc } from 'lodash';

type UseDebounce = <F extends (...args: any[]) => any>(
	fn: F,
	timeout: number,
	deps?: any[],
	options?: DebounceSettings
) => DebouncedFunc<F>;

const useDebounce: UseDebounce = (fn, timeout, deps, options) => {
	return useCallback(debounce(fn, timeout, options), deps);
};

export default useDebounce;
