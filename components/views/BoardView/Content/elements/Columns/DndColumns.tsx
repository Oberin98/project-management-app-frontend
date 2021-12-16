import {
	DndContext,
	closestCenter,
	useSensors,
	MouseSensor,
	useSensor,
	TouchSensor,
	KeyboardSensor,
	DragOverEvent,
	DragEndEvent,
} from '@dnd-kit/core';
import {
	SortableContext,
	SortableContextProps,
	horizontalListSortingStrategy,
	sortableKeyboardCoordinates as coordinateGetter,
} from '@dnd-kit/sortable';
import { SetStateAction, Dispatch, useCallback } from 'react';

import Columns, { ColumnsProps } from './Columns';

export interface DndColumnsProps<T extends DndColumnsState> extends Prefer<SortableContextProps, ColumnsProps> {
	setItems: Dispatch<SetStateAction<T>>;
}

const DndColumns = <T extends DndColumnsState = DndColumnsState>({
	items,
	setItems,
	strategy = horizontalListSortingStrategy,
	children,
	...props
}: DndColumnsProps<T>) => {
	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, { coordinateGetter })
	);

	const onDragOver = useCallback(
		({ active, over }: DragOverEvent) => {
			if (active && over) {
				const activeColumnId = active.data.current.columnId;
				const overColumnId = over.data.current.columnId;

				if (activeColumnId !== overColumnId) {
					setItems((prevItems) => {
						const activeColumnIndex = prevItems.findIndex((column) => column.id === activeColumnId);
						const overColumnIndex = prevItems.findIndex((column) => column.id === overColumnId);

						const activeColumnCards = [...prevItems[activeColumnIndex].content];
						const activeId = active.id;
						const activeCardIndex = activeColumnCards.findIndex((card) => card.id === activeId);
						const [activeCard] = activeColumnCards.splice(activeCardIndex, 1);

						const overColumnCards = [activeCard, ...prevItems[overColumnIndex].content];

						const items = [...prevItems];

						items[activeColumnIndex] = {
							...items[activeColumnIndex],
							content: activeColumnCards,
						};

						items[overColumnIndex] = {
							...items[overColumnIndex],
							content: overColumnCards,
						};

						return items as T;
					});
				}
			}
		},
		[setItems]
	);

	const onDragEnd = useCallback(
		({ active, over }: DragEndEvent) => {
			if (active && over) {
				const activeColumnId = active.data.current.columnId;
				const overColumnId = over.data.current.columnId;

				if (activeColumnId === overColumnId) {
					setItems((prevItems) => {
						const activeId = active.id;
						const overId = over.id;

						const activeColumnIndex = prevItems.findIndex((column) => column.id === activeColumnId);
						const activeColumnCards = [...prevItems[activeColumnIndex].content];
						const activeCardIndex = activeColumnCards.findIndex((card) => card.id === activeId);
						const overCardIndex = activeColumnCards.findIndex((card) => card.id === overId);

						const items = [...prevItems];

						activeColumnCards.splice(overCardIndex, 0, activeColumnCards.splice(activeCardIndex, 1)[0]);

						items[activeColumnIndex] = {
							...items[activeColumnIndex],
							content: activeColumnCards,
						};

						return items as T;
					});
				}
			}
		},
		[setItems]
	);

	return (
		<DndContext
			id="dnd-columns"
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragOver={onDragOver}
			onDragEnd={onDragEnd}
		>
			<SortableContext id="dnd-sortable" items={items} strategy={strategy}>
				<Columns {...props}>{children}</Columns>
			</SortableContext>
		</DndContext>
	);
};

export default DndColumns;
