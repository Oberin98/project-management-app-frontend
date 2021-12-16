import { DragOverlay, useDndContext } from '@dnd-kit/core';
import { FC } from 'react';
import { createPortal } from 'react-dom';

import Card from './Card';

const OverlayCard: FC = () => {
	const { active } = useDndContext();

	return typeof window === 'undefined'
		? null
		: createPortal(
				<DragOverlay>
					{active ? <Card state="grabbing" readOnly disabled defaultValue={active?.data.current?.label || ''} /> : null}
				</DragOverlay>,
				document.body
		  );
};

export default OverlayCard;
