import { useDroppable } from '@dnd-kit/core';
import { SortableContext, SortableContextProps } from '@dnd-kit/sortable';
import { FC } from 'react';

import Column, { ColumnProps } from './Column';

type SortableColumnProps = Prefer<SortableContextProps, ColumnProps>;

const SortableColumn: FC<SortableColumnProps> = ({ id, items, strategy, children, ...props }) => {
	const { setNodeRef } = useDroppable({ id, data: { columnId: id } });

	return (
		<SortableContext items={items} strategy={strategy}>
			<Column id={id} ref={setNodeRef} {...props}>
				{children}
			</Column>
		</SortableContext>
	);
};

export default SortableColumn;
