import cn from 'classnames';
import { ChangeEvent, ComponentPropsWithoutRef, FocusEvent, forwardRef, KeyboardEvent, memo } from 'react';

import styles from './Card.module.scss';

import { Button } from '~elements';
import { HandleIcon, TrashIcon } from '~icons';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
	value?: string;
	defaultValue?: string;
	disabled?: boolean;
	readOnly?: boolean;
	draggableProps?: Record<string, any>;
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
	onKeyPress?: (ev: KeyboardEvent<HTMLInputElement>) => void;
	onFocus?: (ev: FocusEvent<HTMLInputElement>) => void;
	onBlur?: (ev: FocusEvent<HTMLInputElement>) => void;
	onDelete?: (id: string) => void;
	state?: 'grab' | 'grabbing';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			id,
			value,
			defaultValue,
			disabled,
			readOnly,
			draggableProps = {},
			onChange,
			onKeyPress,
			onFocus,
			onBlur,
			onDelete,
			className,
			state,
			...props
		},
		ref
	) => {
		const onDeleteHandler = () => {
			onDelete(id);
		};

		return (
			<div ref={ref} id={id} className={cn(styles.card, styles[state], className)} {...props}>
				<input
					type="text"
					placeholder="Enter task name"
					value={value}
					defaultValue={defaultValue}
					disabled={disabled}
					readOnly={readOnly}
					onChange={onChange}
					onKeyPress={onKeyPress}
					onFocus={onFocus}
					onBlur={onBlur}
					title={value || defaultValue}
					className={styles.input}
				/>
				<Button
					icon={<TrashIcon width="20" height="20" viewBox="0 0 24 24" />}
					onClick={onDeleteHandler}
					className={styles.deleteButton}
				/>
				<Button icon={<HandleIcon width="20" height="20" />} className={styles.handleButton} {...draggableProps} />
			</div>
		);
	}
);

export default memo(Card);
