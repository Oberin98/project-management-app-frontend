import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ChangeEvent, FC, useCallback } from 'react';

import Card, { CardProps } from './Card';

interface SortableCardProps extends Omit<CardProps, 'onDelete' | 'onChange'> {
	cardId: string;
	columnId: string;
	onDelete: (columnId: string, cardId: string) => void;
	onChange: (columnId: string, cardId: string, value: string) => void;
}

const SortableCard: FC<SortableCardProps> = ({
	cardId,
	columnId,
	children,
	style,
	value,
	defaultValue,
	onDelete,
	onChange,
	...props
}) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
		id: cardId,
		data: { label: value || defaultValue, columnId },
	});

	const onDeleteHandler = useCallback(() => {
		onDelete(columnId, cardId);
	}, [onDelete, columnId, cardId]);

	const onChangeHandler = useCallback(
		({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
			onChange(columnId, cardId, currentTarget.value);
		},
		[onChange, columnId, cardId]
	);

	return (
		<Card
			ref={setNodeRef}
			value={value}
			defaultValue={defaultValue}
			onDelete={onDeleteHandler}
			onChange={onChangeHandler}
			state="grab"
			style={{
				...style,
				transform: CSS.Transform.toString(transform),
				transition,
			}}
			draggableProps={{
				...attributes,
				...listeners,
			}}
			{...props}
		>
			{children}
		</Card>
	);
};

export default SortableCard;
