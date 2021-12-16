import { useCallback, useEffect, useRef, useState } from 'react';

import { generateId, initialContent } from '../utils';

import { useDebounce } from '~hooks';

const useColumnsState = () => {
	const [items, setItems] = useState<DndColumnsState>([]);
	const contentIsSetRef = useRef(false);

	const onAdd = useCallback((columnId: string, value: string) => {
		setItems((prevItems) => {
			return prevItems.map((column) => {
				return column.id === columnId
					? {
							...column,
							content: [
								{
									id: generateId('task'),
									value,
								},
								...column.content,
							],
					  }
					: column;
			});
		});
	}, []);

	const onChange = useDebounce(
		(columnId: string, cardId: string, value: string) => {
			setItems((prevItems) =>
				prevItems.map((column) => {
					return column.id === columnId
						? {
								...column,
								content: column.content.map((card) => {
									return card.id === cardId
										? {
												...card,
												value,
										  }
										: card;
								}),
						  }
						: column;
				})
			);
		},
		400,
		[]
	);

	const onDelete = useCallback((columnId: string, cardId: string) => {
		setItems((prevItems) =>
			prevItems.map((column) => {
				return column.id === columnId
					? {
							...column,
							content: column.content.filter((card) => card.id !== cardId),
					  }
					: column;
			})
		);
	}, []);

	useEffect(() => {
		if (!contentIsSetRef.current) {
			const jsonContent = localStorage.getItem('board_content');
			const content = jsonContent ? (JSON.parse(jsonContent) as DndColumnsState) : initialContent;
			setItems(content);
			contentIsSetRef.current = true;
		} else {
			localStorage.setItem('board_content', JSON.stringify(items));
		}
	}, [items]);

	return { items, setItems, onAdd, onChange, onDelete };
};

export default useColumnsState;
