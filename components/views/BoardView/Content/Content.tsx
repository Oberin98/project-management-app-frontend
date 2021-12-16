import { verticalListSortingStrategy } from '@dnd-kit/sortable';

import styles from './Content.module.scss';
import { DndColumns, SortableColumn, SortableCard, OverlayCard, Toolbar } from './elements';
import useColumnsState from './hooks/useColumnsState';

import { MainLayout } from '~layouts/MainLayout';

const Content = () => {
	const { items, setItems, onAdd, onChange, onDelete } = useColumnsState();

	return (
		<MainLayout.Content className={styles.content}>
			<Toolbar className={styles.toolbar} />
			<DndColumns<DndColumnsState> items={items} setItems={setItems}>
				{items.map(({ id: columnId, value, content }) => (
					<SortableColumn
						key={columnId}
						id={columnId}
						items={content}
						strategy={verticalListSortingStrategy}
						heading={value}
						onAdd={onAdd}
						className={styles.column}
					>
						{content.map(({ id: cardId, value }) => (
							<SortableCard
								key={cardId}
								cardId={cardId}
								columnId={columnId}
								defaultValue={value}
								onChange={onChange}
								onDelete={onDelete}
								className={styles.card}
							/>
						))}
					</SortableColumn>
				))}
				<OverlayCard />
			</DndColumns>
		</MainLayout.Content>
	);
};

export default Content;
