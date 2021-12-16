import cn from 'classnames';
import { KeyboardEvent, ComponentPropsWithoutRef, forwardRef, memo, useState, useRef } from 'react';

import styles from './Column.module.scss';

import { Button } from '~elements';
import { PlusIcon } from '~icons';

export interface ColumnProps extends ComponentPropsWithoutRef<'section'> {
	heading: string;
	onAdd: (columnId: string, value: string) => void;
}

const Column = forwardRef<HTMLDivElement, ColumnProps>(({ heading, onAdd, children, className, id, ...props }, ref) => {
	const [editable, setEditable] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const onSetEditableHandler = () => {
		setEditable((prev) => !prev);
		setTimeout(() => {
			inputRef.current?.focus();
		}, 100);
	};

	const onBlurHandler = () => {
		setEditable(false);
	};

	const onKeyPressAddHandler = ({ currentTarget, code }: KeyboardEvent<HTMLInputElement>) => {
		if (code === 'Enter' && currentTarget.value) {
			onAdd(id, currentTarget.value);
			inputRef.current.value = '';
		}
	};

	return (
		<section ref={ref} id={id} className={cn(styles.column, className)} {...props}>
			<div className={styles.content}>
				<h4 className={styles.heading}>{heading}</h4>
				<Button icon={<PlusIcon />} onClick={onSetEditableHandler} className={styles.addButton} />
			</div>
			{editable && (
				<label htmlFor={`${heading}-input`} className={styles.addInput}>
					<input
						ref={inputRef}
						id={`${heading}-input`}
						placeholder="Enter task name"
						type="text"
						name={heading}
						onKeyPress={onKeyPressAddHandler}
						onBlur={onBlurHandler}
					/>
				</label>
			)}
			{children}
		</section>
	);
});

export default memo(Column);
